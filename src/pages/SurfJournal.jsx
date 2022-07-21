import React, { useContext } from 'react';
import NavBar from "../components/NavBar";
import { MyContext } from "../context/MyProvider";

const SurfJournal = () => {
    const context = useContext(MyContext);

    let quiver = ["Grooveler", "Fish", "Shortboard", "Malibu", "Longboard"];
    let rating = [1, 2, 3, 4, 5];

    const handleSubmitJournal = (event) => {
        event.preventDefault();
        console.log("Trip submitted");
        context.setTripLog(context.tripLogBlank);
    }

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
                <input value="Save" type="submit" />
            </form>
        </div>
    )
}

export default SurfJournal;