import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import NavBar from "../components/NavBar";
import './SurfLog.css';
import TripCard from '../components/TripCard';
import ExpandedTripCard from '../components/ExpandedTripCard';

// import useMediaQuery from '../hooks/useMediaQuery';


const SurfLog = () => {
    const context = useContext(MyContext);
    // const isDesktop = useMediaQuery('(min-width: 960px)');
    
    // let [ showExpandedCard, setShowExpandedCard ]= useState(false);
    

    //! previous version of calling the trips
    // let [ trips, setTrips ] = useState();

    // let id = context.userId;

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trips/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setTrips(data);
    //         console.log(data);
    //     });
    // }, [id]);

    
    

    const handleClickViewMoreTripSelected = (id) => {
        console.log(id);
        if (typeof id === "number" ){
            context.setSelectedTripId(id);
        } else {
            console.error("There was an issue with the finding the id of this trip");
        }
        let index = context.trips.findIndex((e) => e.id === id);
        // console.log(index);
        context.setSelectedTripIndex(index);
        context.setShowExpandedCard(!context.showExpandedCard);
    } 

    const handleClickFromExpandedCard = () => {
        context.setShowExpandedCard(!context.showExpandedCard);
    }

    return (
        <div>
            <NavBar />
            <div className='log_page_container'>
                {context.trips ? context.showExpandedCard ?
                <>
                <ExpandedTripCard trip={context.trips[context.selectedTripIndex]} action={handleClickFromExpandedCard}/>
                </>
                :
                <>
                    {context.trips.map((e,i) => <TripCard key={i} id={e.id} title={e.title} image={e.image} rating={e.rating} action={handleClickViewMoreTripSelected}/>)}
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