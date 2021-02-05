import React, { useState } from 'react';

const ChuckJoke = () => {
    const [joke, setJoke] = useState([])
   
    function handleFetch() {
        const url = "https://api.chucknorris.io/jokes/random"
       fetch(url).then(res => res.json())
        .then(json => {
            console.log(json);
            setJoke(json.value);
        })
    }

  
    return ( <div>
        <h1>Chuck Norris Challenge</h1>
        <button onClick={handleFetch}>Fetch Chuck</button>
        <div>{joke}</div>
    </div> );
}
 
export default ChuckJoke;