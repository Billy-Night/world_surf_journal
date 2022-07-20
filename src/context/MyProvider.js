import React, { useState } from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {

    let [ loggedIn, setLoggedIn ] = useState(false); 

//For the user log in
   let userBlank = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    };

    let [ user, setUser] = useState(userBlank);

    const handleUserDetailsChange = (event) => {
        const { name, value } = event.currentTarget;

        setUser({
            ...user, 
            [name]: value,
        });
    };

//For the user registration
    
   

    return (
        <MyContext.Provider 
            value={{
                user: user,
                handleUserDetailsChange: handleUserDetailsChange,
                setLoggedIn: setLoggedIn,
                loggedIn: loggedIn,
            }} >
            { props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;