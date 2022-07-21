import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const handleClickReg = () => {
        navigate('/registration');
    }

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        fetch('/api/log-in', {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json',
            }),
            body: JSON.stringify({
                email: context.user.email,
                password: context.user.password,
            }),
        }).then((res) => {
            if (res.status === 200) {
                context.setLoggedIn(true);
                context.setUser(context.userBlank);
                navigate('/surf/journal');
            } else {
                console.log("There was a problem logging in FE");
            }
        })
    };

    return (
        <div>
           <h1>Please Log In Below</h1>
            <form onSubmit={handleLogInSubmit}>
                <input value={context.user.email}  onChange={context.handleUserDetailsChange} name="email" placeholder="email" />
                <input value={context.user.password} onChange={context.handleUserDetailsChange} name="password" placeholder="password" />
                <input type="submit" value="Log In" />
            </form>
            <button onClick={handleClickReg}>Sign Up</button>
        </div>
    )
}

export default Login;