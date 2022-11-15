import React from 'react';
import './TripCard.css';
import star from '../assets/star.png';


const TripCard = (props) => {
    let rating = props.rating;
    let ratingArray = [...Array(rating)];

    return (
        <div className="individual_trip_card">
            <h2>{props.title}</h2>
            <img className="individual_trip_card_img" src={props.image} alt="surf"/>
            <div className="individual_trip_card_star">
                {ratingArray.map((e,i) => <img key={i} src={star} alt="star"/>)}
            </div>
            <div className="individual_trip_card_btn_container">
                <button onClick={() => props.action(props.id)} className="individual_trip_card_btn">View More</button>
            </div>
        </div>
    )
}

export default TripCard;