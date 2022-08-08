import React, { useState } from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {

    let [ loggedIn, setLoggedIn ] = useState(false);
    
    let [ userId, setUserId ] = useState();

//Handling the user information for registration and log in
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

// Handling the journal submission

    let tripLogBlank = {
        title: "",
        image: "",
        where: "",
        when: "",
        who: "",
        how: "",
        rating: 0,
        notes: "",
        gear: "",
        quiver: "",
        duration: 0,
        user_id: null,
    }

    let [ tripLog, setTripLog ] = useState(tripLogBlank);

    const handleTripLogChange = (event) => {
        const { name, value } = event.currentTarget;
        
        setTripLog({
            ...tripLog,
            [name]: value,
        });
    };

// Handling trip update 
    let [ updateTrip, setUpdatetrip ] = useState(false); 
    
   

    return (
        <MyContext.Provider 
            value={{
                userBlank: userBlank,
                user: user,
                setUser: setUser,
                handleUserDetailsChange: handleUserDetailsChange,
                setLoggedIn: setLoggedIn,
                loggedIn: loggedIn,
                setUserId: setUserId,
                userId: userId,
                tripLog: tripLog,
                handleTripLogChange: handleTripLogChange,
                setTripLog: setTripLog,
                tripLogBlank: tripLogBlank,
                updateTrip: updateTrip,
                setUpdatetrip: setUpdatetrip
            }} >
            { props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;