import React from 'react';
// import ExpandedTripCard from "../components/ExpandedTripCard.jsx";
import './TripCard.css';
import star from '../assets/star.png';
// import barrel from '../assets/barrel.jpeg';
// import night from `../assets/${}.jpeg`;

const TripCard = (props) => {

    // let [ showExpandedCard, setShowExpandedCard ]= useState(false);

    let rating = props.rating;
    // console.log(rating);

    let ratingArray = [...Array(rating)];

    // const handleViewMoreTripSelected = () => {
    //     setShowExpandedCard(!showExpandedCard);
    // }
   
    // console.log(imageName);
    
    // const image = require(`../assets/${props.image}.jpeg`)

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