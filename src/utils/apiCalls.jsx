

// The trips API call 
// todo this could in fact become a generic api call which converts the response object into a JSON and also handles errors although mite be difficult to source the issue directly.

export async function apiCallForTrips (url){
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() // Extracting data as a JSON object from the response.
    return data;
};