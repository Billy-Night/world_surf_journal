// import { useContext } from "react";
// import { MyContext } from "../context/MyProvider";


// export const TripsApiCall = () => {
//     const context = useContext(MyContext);

//     let id = context.userId;

//     fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trips/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//             context.setTrips(data);
//             console.log("Successful api request for trips");
//         }); 
// }