import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import NavBar from "../components/NavBar";
import './SurfLog.css';
import TripCard from '../components/TripCard';
import ExpandedTripCard from '../components/ExpandedTripCard';
// import useMediaQuery from '../hooks/useMediaQuery';


const SurfLog = () => {
    const context = useContext(MyContext);
    // const isDesktop = useMediaQuery('(min-width: 960px)');
    
    let [ trips, setTrips ] = useState();

    let [ showExpandedCard, setShowExpandedCard ]= useState(false);

    let id = context.userId;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trips/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTrips(data);
            console.log(data);
        });
    }, [id]);

    const handleClickViewMoreTripSelected = (id) => {
        console.log(id);
        if (typeof id === "number" ){
            context.setSelectedTripId(id);
        } else {
            console.error("There was an issue with the finding the id of this trip");
        }
        let index = trips.findIndex((e) => e.id === id);
        // console.log(index);
        context.setSelectedTripIndex(index);
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
                <ExpandedTripCard trip={trips[context.selectedTripIndex]} action={handleClickFromExpandedCard}/>
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