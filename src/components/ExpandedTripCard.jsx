import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';
import { useNavigate } from 'react-router-dom';
// import barrel from '../assets/barrel.jpeg';
// import star from '../assets/star.png';
import './ExpandedTripCard.css';
import clock from '../assets/clock.png';

const ExpandedTripCard = (props) => {
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const handleClickExpandedCardEdit = () => {
        console.log("clicked");
        context.setTripLog({...props.trip});
        context.setUpdatetrip(!context.updateTrip);
        console.log(props.trip);
        navigate('/surf/journal');
    }

    return (
        <div className="individual_expanded_trip_card">
            <h2>{props.trip.title}</h2>
            <div className="individual_expanded_trip_card_img_container">
            <img  src={props.trip.image} alt="surf"/>
            </div>
            <div className="individual_expanded_trip_card_star">
                {/* {props.ratingArray.map((e,i) => <img key={i} src={star} alt="star"/>)} */}
            </div>
            <div className="individual_expanded_trip_card_details_container">
                <div className="individual_expanded_trip_card_details">
                    <h3>Where:</h3>
                    <p>{props.trip.where}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <h3>When:</h3>
                    <p>{props.trip.when}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <h3>Who:</h3>
                    <p>{props.trip.who}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <h3>How:</h3>
                    <p>{props.trip.how}</p>
                </div>
                <div className="individual_expanded_trip_card_details_notes">
                    <h3>Notes:</h3>
                    <p>{props.trip.notes}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <h3>Gear:</h3>
                    <p>{props.trip.gear}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <h3>Quiver:</h3>
                    <p>{props.trip.quiver}</p>
                </div>
                <div className="individual_expanded_trip_card_details">
                    <div className='iet_card_details_duration_container'>
                        <div className="iet_card_details_duration">
                            <h3>Duration:</h3>
                            <p>{props.trip.duration} (m)</p>
                        </div>
                        <img className='clock_icon' src={clock} alt="clock" />
                    </div>
                </div>
            </div>
            <div className="individual_expanded_trip_card_btn_container">
                <button onClick={props.action} className="individual_expanded_trip_card_btn">View More</button>
                <button className="individual_expanded_trip_card_btn" onClick={handleClickExpandedCardEdit}>Edit Me</button>
            </div>
        </div>
    )
}

export default ExpandedTripCard;