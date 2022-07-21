import React, { useContext } from 'react';
import NavBar from "../components/NavBar";
import { MyContext } from "../context/MyProvider";

const SurfJournal = () => {
    const context = useContext(MyContext);

    let quiver = ["Grooveler", "Fish", "Shortboard", "Malibu", "Longboard"];
    let rating = [1, 2, 3, 4, 5];

    const handleSubmitJournal = (event) => {
        event.preventDefault();
        fetch('http://localhost:3306/api/trip/log', {
            method: "POST",
            headers: new Headers({
                'Content-Type':'application/json',
            }),
            body: JSON.stringify({
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
            }
        });
    };

    return (
        <div>
            <NavBar />
            <p>This is the surf journal</p>
            <form onSubmit={handleSubmitJournal}>
                <input value={context.tripLog.where} onChange={context.handleTripLogChange} name="where" placeholder="Where" />
                <input value={context.tripLog.when} onChange={context.handleTripLogChange} name="when" placeholder="When" />
                <input value={context.tripLog.who} onChange={context.handleTripLogChange} name="who" placeholder="Who" />
                <input value={context.tripLog.how} onChange={context.handleTripLogChange} name="how" placeholder="How" />

                {rating.map((e,i) => <input value={e} onChange={context.handleTripLogChange} key={i} type="radio" name="rating" />)}


                <input value={context.tripLog.notes} onChange={context.handleTripLogChange} name="notes" placeholder="Notes" />
                <input value={context.tripLog.gear} onChange={context.handleTripLogChange} name="gear" placeholder="Gear" />
                {quiver.map((e,i) => <input value={e} onChange={context.handleTripLogChange} key={i} type="radio" name="quiver" />)}
                <input value={context.tripLog.duration} onChange={context.handleTripLogChange} name="duration" placeholder="Duration (m)" />
                <input value="Save" type="submit" />
            </form>
        </div>
    )
}

export default SurfJournal;