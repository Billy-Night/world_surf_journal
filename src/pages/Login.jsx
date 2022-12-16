import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";
import './Login.css';
import useMediaQuery from "../hooks/useMediaQuery.jsx";


const Login = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);
    const isDesktop = useMediaQuery('(min-width: 960px)');

    let [ serverError, setServerError ] = useState(false);

    let [ errorPassword, setErrorPassword ] =  useState(false);
    let [ errorEmail, setErrorEmail ] = useState(false);

    const handleClickReg = (event) => {
        event.preventDefault();
        navigate('/registration');
    }

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        try {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/log-in`, {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin': 'no-cors',
            }),
            body: JSON.stringify({
                email: context.user.email,
                password: context.user.password,
            }),
        }).then((res) => {
            if (res.status === 404) {
                setServerError(true);
                console.log("There is a server issue maybe the API url is wrong")
            } else if (res.status === 401) {
                context.setUser(context.userBlank);
                console.log("There was a problem logging in FE EMAIL!");
                setErrorEmail(true);
            } else if (res.status === 500) {
                context.setUser(context.userBlank);
                console.log("There was a problem logging in FE PASSWORD!");
                setErrorPassword(true);
            }
            return res.json();
        }).then((data) => {
            context.setLoggedIn(true);
            context.setUser(context.userBlank);
            context.setUserId(data.id);
            setErrorPassword(false);
            navigate('/surf/journal');
        })
        } catch (error) {
            console.log("There was an error from the try catch");
    }
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
                            <input value={context.user.email}  onChange={context.handleUserDetailsChange} name="email" placeholder="Enter email" type="email" required/>
                            <label htmlFor="password">Password:</label>
                            <input value={context.user.password} onChange={context.handleUserDetailsChange} name="password" placeholder="Enter password" type="password" required/>
                            <div className="login_form_btn_container">
                                <input className='login_form_btn' type="submit" value="Log In" />
                                <button className='login_form_btn' onClick={handleClickReg}>Sign Up</button>
                            </div>
                        </form>
                        </div>
                        {errorEmail ? 
                        <>
                            <p>Email Not Found</p>
                        </> : null }
                        {errorPassword ?
                        <> 
                            <p>WRONG PASSWORD</p>
                        </> : null }
                        {serverError ? 
                        <>
                            <p>There is a potential server issue</p>
                        </> : null
                        }
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Login;