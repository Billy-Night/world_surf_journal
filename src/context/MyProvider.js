import React, { useState } from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {

//For the user log in
   let userBlank = {
        email: "",
        password: "",
    };

let [ user, setUser] = useState(userBlank);

const handleLogInChange = (event) => {
    const { name, value } = event.currentTarget;

    setUser({
        ...user, 
        [name]: value,
    });
}
   

    return (
        <MyContext.Provider 
            value={{
                user: user,
                handleLogInChange: handleLogInChange,

            }} >
            { props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;