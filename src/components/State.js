//JS Object where property values of the component are stored. 
//Managed inside of the component instead of being passed into it (Like Props)

import {useState} from 'react';

const State = () => {
    const [count, setCount] = useState (4) //useState is a hook that must execute in the same order.

    function decCount() {
        setCount(count -1);
    }
    function incCount() {
        setCount(count +1)
    }
    return (
        <>
        <button onClick={decCount}>-</button>
        <span> { count } </span>
        <button onClick={incCount}>+</button>
        </>
    )
}

export default State;