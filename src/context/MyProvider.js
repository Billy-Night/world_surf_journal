import React from "react";

export const MyContext = React.createContext();

const MyProvider = (props) => {

    let test = "Well done";

    return (
        <MyContext.Provider 
            value={{
                test: test,
            }} >
            { props.children }
        </MyContext.Provider>
    )
};

export default MyProvider;