import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";
import './Login.css';
import useMediaQuery from "../hooks/useMediaQuery.jsx";

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const isDesktop = useMediaQuery('(min-width: 960px)');

    const handleClickReg = (event) => {
        event.preventDefault();
        navigate('/registration');
    }

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3306/api/log-in', {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json',
            }),
            body: JSON.stringify({
                email: context.user.email,
                password: context.user.password,
            }),
        }).then((res) => {
            if (res.status === 500) {
                context.setUser(context.userBlank);
                console.log("There was a problem logging in FE");
            }
            return res.json();
        }).then((data) => {
            context.setLoggedIn(true);
            context.setUser(context.userBlank);
            context.setUserId(data.id);
            navigate('/surf/journal');
        });
    };

    return (
        <div className="login_main">
            <div className="space"></div>
            <div className={`login_main_container_${isDesktop ? "desk" : "mobile"}`}>
                <div className="login_form_container">
                    <div className="login_inner_form_container">
                        <h2>Welcome</h2>
                        <p>Please Log In</p>
                        <div className="login_form">
                        <form onSubmit={handleLogInSubmit}>
                            <label htmlFor="email" name="email">Email:</label>
                            <input value={context.user.email}  onChange={context.handleUserDetailsChange} name="email" placeholder="Enter email" />
                            <label htmlFor="password">Password:</label>
                            <input value={context.user.password} onChange={context.handleUserDetailsChange} name="password" placeholder="Enter password" />
                            <div className="login_form_btn_container">
                                <input className='login_form_btn' type="submit" value="Log In" />
                                <button className='login_form_btn' onClick={handleClickReg}>Sign Up</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
              </div> 
        </div>
    )
}

export default Login;