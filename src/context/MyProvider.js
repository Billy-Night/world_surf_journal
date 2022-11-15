import React, { useState } from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {

// State 1:
    let [ loggedIn, setLoggedIn ] = useState(false);
// State 2:
    let [ userId, setUserId ] = useState();

//Handling the user information for registration and log in
   let userBlank = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    };

// State 3:
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

   
    const TripsApiCall = () => {
        setTrips([]);
        if (typeof userId === "number"){
            fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trips/${userId}`)
                        .then((res) => res.json())
                        .then((data) => {
                            setTrips(data);
                            console.log("Successful api request for trips");

                        }); 
        } else {
            console.log("The user id passed to the api call is not a number");
        }
    }

    //State 4: Handling all the users trips from the api call
    let [ trips, setTrips ] = useState();

    //State 5: 
    let [ tripLog, setTripLog ] = useState(tripLogBlank);

    const handleTripLogChange = (event) => {
        const { name, value } = event.currentTarget;
        
        setTripLog({
            ...tripLog,
            [name]: value,
        });
    };

    // State 6: Handling trip update 
    let [ updateTrip, setUpdatetrip ] = useState(false); 
    
    //! State 7: Handling selected trip this is the index used for displaying the trips as cards once the data has been recieved
    let [ selectedTripIndex, setSelectedTripIndex ] = useState();

    //State 8: Handle selected trip id 
    let [ selectedTripId, setSelectedTripId ] = useState();
   
    //State 9: Handle show expanded
    let [ showExpandedCard, setShowExpandedCard ]= useState(false);

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
                setTripLog: setTripLog,
                TripsApiCall: TripsApiCall,
                setTrips: setTrips,
                trips: trips,
                tripLog: tripLog,
                handleTripLogChange: handleTripLogChange,
                tripLogBlank: tripLogBlank,
                updateTrip: updateTrip,
                setUpdatetrip: setUpdatetrip,
                setSelectedTripIndex: setSelectedTripIndex,
                selectedTripIndex: selectedTripIndex,
                setSelectedTripId: setSelectedTripId,
                selectedTripId: selectedTripId,
                setShowExpandedCard: setShowExpandedCard,
                showExpandedCard: showExpandedCard
            }} >
            { props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;