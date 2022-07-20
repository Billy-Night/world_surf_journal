import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const handleClickReg = () => {
        navigate('/registration');
    }

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        navigate('/surf/journal');
        context.setLoggedIn(true);
    }

    return (
        <div>
            <NavBar />
           <h1>Please Log In Below</h1>
            <form onSubmit={handleLogInSubmit}>
                <input value={context.user.email}  onChange={context.handleLogInChange} name="email" placeholder="email" />
                <input value={context.user.password} onChange={context.handleLogInChange} name="password" placeholder="password" />
                <input type="submit" value="Log In" />
            </form>
            <button onClick={handleClickReg}>Sign Up</button>
        </div>
    )
}

export default Login;