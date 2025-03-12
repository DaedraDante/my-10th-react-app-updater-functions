import { useState } from "react";


function Component() {

    const [count, setCount] = useState(0);

    function increment() {

        
        //This only updates once: setCount(count + 1);
        //This updates dynamically and remembers the previous value,
        //it takes the P E N D I N G state and updates the current value

        //According to documentation ,a good practice is to name the 
        //updated function parameter to prevVariable or just the first
        //letter of the variable like this:
        setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
    };

    function decrement() {
        setCount(prevCount => prevCount - 1);
        setCount(c => c - 1);
    };

    function reset() {
        setCount(0);
    };


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Component