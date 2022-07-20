import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const handleClickLogin = () => {
        navigate('/surf/journal');
    }

    const handleClickReg = () => {
        navigate('/registration');
    }

    return (
        <div>
            <p>This is the login component</p>
            <p>Context: {context.test}</p>
            <button onClick={handleClickLogin}>Log In</button>
            <button onClick={handleClickReg}>Sign Up</button>
        </div>
    )
}

export default Login;