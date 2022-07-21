import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import NavBar from "../components/NavBar";


const SurfLog = () => {
    const context = useContext(MyContext);

    let [ trips, setTrips ] = useState();

    let id = context.userId;

    useEffect(() => {
        fetch(`http://localhost:3306/api/trips/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTrips(data);
            console.log(data);
        });
    }, [id]);

    return (
        <div>
            <NavBar />
            {trips ? 
            <div className="log-page-trip-table">
                <p>Data Loaded: This is where the trips will go</p>
            </div> :  <p>Sorry you have no trips to display</p>}
            <p>The surf log</p>
        </div>
    );
}; 

export default SurfLog;