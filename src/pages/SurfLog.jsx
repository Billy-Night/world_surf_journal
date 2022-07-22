import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import NavBar from "../components/NavBar";
import './SurfLog.css';
import TripCard from '../components/TripCard';
import ExpandedTripCard from '../components/ExpandedTripCard';


const SurfLog = () => {
    const context = useContext(MyContext);

    let [ trips, setTrips ] = useState();

    let [ selectedTripId, setSelectedTripId ] = useState();
    let [ selectedTripIndex, setSelectedTripIndex ] = useState();
    let [ showExpandedCard, setShowExpandedCard ]= useState(false);

    let id = context.userId;

    useEffect(() => {
        fetch(`http://localhost:3306/api/trips/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTrips(data);
            console.log(data);
        });
    }, [id]);

    const handleClickViewMoreTripSelected = (id) => {
        // console.log(id);
        setSelectedTripId(id);
        let index = trips.findIndex((e) => e.id === id);
        // console.log(index);
        setSelectedTripIndex(index);
        setShowExpandedCard(!showExpandedCard);
    } 

    const handleClickFromExpandedCard = () => {
        setShowExpandedCard(!showExpandedCard);
    }

    return (
        <div>
            <NavBar />
            <div className='log_page_container'>
                {trips ? showExpandedCard ?
                <>
                <ExpandedTripCard trip={trips[selectedTripIndex]} action={handleClickFromExpandedCard}/>
                </>
                :
                <>
                    {trips.map((e,i) => <TripCard key={i} id={e.id} title={e.title} image={e.image} rating={e.rating} action={handleClickViewMoreTripSelected}/>)}
                </>
                :
                <>
                    <p>Sorry you have no trips to display</p> 
                </> 
                 }
            </div>
        </div>
    );
}; 

export default SurfLog;