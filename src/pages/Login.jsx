import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";

const Login = () => {

    const context = useContext(MyContext);

    return (
        <div>
            <p>This is the login component</p>
            <p>Context: {context.test}</p>
        </div>
    )
}

export default Login;