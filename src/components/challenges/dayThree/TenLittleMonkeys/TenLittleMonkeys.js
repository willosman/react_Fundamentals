import {useState} from 'react';

const TenMonkeys = () => {
    const [count, setCount] = useState (10)
    const [message, setMessage] = useState (`${count} monkeys jumping on the bed. One fell off and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed. `)

    function countDown() {
        setCount(count -1);
        setMessage(`${count} monkeys jumping on the bed. One fell off and bumped his head. Momma called the doctor and the doctor said. No more monkeys jumping on the bed. `)
        if (count < 1) {
            setCount(0);
            setMessage('There are no more monkeys jumping on the bed')
        } 

    }
    return (
        <div>
        <p>{message}</p>
        <button onClick={countDown}>Less Monkeys!</button>
        </div>
    )
}


export default TenMonkeys;