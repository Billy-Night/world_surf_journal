import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { MyContext } from "../context/MyProvider";
import './SurfJournal.css';
import useMediaQuery from '../hooks/useMediaQuery';

const SurfJournal = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();

    const isDesktop = useMediaQuery('(min-width: 960px)');

    let quiver = ["Grooveler", "Fish", "Shortboard", "Malibu", "Longboard"];
    let rating = [5, 4, 3, 2, 1];

    const handleSubmitJournal = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trip/log`, {
            method: "POST",
            headers: new Headers({
                'Content-Type':'application/json',
            }),
            body: JSON.stringify({
                title: context.tripLog.title,
                image: context.tripLog.image,
                where: context.tripLog.where,
                when: context.tripLog.when,
                who: context.tripLog.who,
                how: context.tripLog.how,
                rating: parseInt(context.tripLog.rating),
                notes: context.tripLog.notes,
                gear: context.tripLog.gear,
                quiver: context.tripLog.quiver,
                duration: parseInt(context.tripLog.duration),
                users_id: context.userId,
            }),
        }).then((res) => {
            if (res.status === 500) {
                console.log("There was an error when adding the trip FE");
                context.setTripLog(context.tripLogBlank);
            } else {
                console.log("Trip was added successfully");
                context.setTripLog(context.tripLogBlank);
                navigate('/surf/log');
            }
        });
    };

    const handleSubmitJournalUpdate = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/trip/log/update`, {
            method: "PUT",
            headers: new Headers({
                'Content-Type':'application/json',
            }),
            body: JSON.stringify({
                id: context.tripLog.id,
                title: context.tripLog.title,
                image: context.tripLog.image,
                where: context.tripLog.where,
                when: context.tripLog.when,
                who: context.tripLog.who,
                how: context.tripLog.how,
                rating: parseInt(context.tripLog.rating),
                notes: context.tripLog.notes,
                gear: context.tripLog.gear,
                quiver: context.tripLog.quiver,
                duration: parseInt(context.tripLog.duration),
                users_id: context.userId,
            }),
        }).then((res) => {
            if (res.status === 500) {
                console.log("There was an error when adding the trip FE");
                context.setTripLog(context.tripLogBlank);
            } else {
                console.log("Trip was added successfully");
                context.setTripLog(context.tripLogBlank);
                context.setUpdatetrip(!context.updateTrip);
                navigate('/surf/log');
            }
        });
    };

    return (
        <div className="sj_main">
            <NavBar />
            <div className='sj_main_container'>
                <div className={`sj_form_container_${isDesktop ? "desk" : "mobile"}`}>
                    <div className='sj_inner_form_container'>
                        <h2>Surf Journal</h2>
                        {context.updateTrip ? <p>Please update your trip</p> : <p>Please add you last trip</p> }
                        <form onSubmit={context.updateTrip ? handleSubmitJournalUpdate : handleSubmitJournal}>
                        <section className="section1">
                            <label htmlFor="title">Title:</label>
                            <input value={context.tripLog.title} onChange={context.handleTripLogChange} name="title" placeholder='Add title here' type="text" />

                            <label htmlFor="image">Image:</label>
                            <input value={context.tripLog.image} onChange={context.handleTripLogChange} name="image" placeholder="Add image URL" />

                            <label htmlFor="where">Where:</label>
                            <input value={context.tripLog.where} onChange={context.handleTripLogChange} name="where" placeholder="Where did you go?" />

                            <label htmlFor="when">When:</label>
                            <input value={context.tripLog.when} onChange={context.handleTripLogChange} name="when" placeholder="When did you go? YYYY-MM-DD" type="date"  />

                            <label htmlFor="who">Who:</label>
                            <input value={context.tripLog.who} onChange={context.handleTripLogChange} name="who" placeholder="Who went?" type="text" />

                            <label htmlFor="how">How:</label>
                            <input value={context.tripLog.how} onChange={context.handleTripLogChange} name="how" placeholder="How did you get there?" type="text"/>
                    
                            <label htmlFor="notes">Notes:</label>
                            <input value={context.tripLog.notes} onChange={context.handleTripLogChange} name="notes" placeholder="Anything worth remembering?" type="text"/>

                            <label htmlFor="gear">Gear:</label>
                            <input value={context.tripLog.gear} onChange={context.handleTripLogChange} name="gear" placeholder="What equipment did you use?" />
                        </section>
                        <section className='sj_form_quiver_section'>
                            <p>Choose your board:</p>
                            {quiver.map((e,i) =>
                            <label key={e} htmlFor="quiver">
                            <input key={i+2} value={e} onChange={context.handleTripLogChange}  type="radio" name="quiver" />{e}</label>
                            )}
                        </section>
                        <section className="section1">
                            <label htmlFor="duration">Duration:</label>
                            <input value={context.tripLog.duration} onChange={context.handleTripLogChange} name="duration" placeholder="Duration (m)" type="number"/>
                        </section>    
                            <p>Rating:</p>
                            <div className='sj_inner_rating_container'>
                                <div className="sj_inner_form_rate">
                                {rating.map((e,i) =>
                                    <>
                                    <input key={i+3} id={`star${e}`} type="radio" name="rating" value={e} onChange={context.handleTripLogChange} />
                                    <label key={i+4} htmlFor={`star${e}`} title="text">{`${e} stars`}</label>
                                    </>
                                    )}
                                </div>
                            </div>
                            <div className='sj_form_btn_container'>
                            {context.updateTrip ? <input className='sj_form_btn' value="Update" type="submit" /> : <input className='sj_form_btn' value="Save" type="submit" />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurfJournal;