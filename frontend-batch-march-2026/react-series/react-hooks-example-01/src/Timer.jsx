import { useState, useEffect } from 'react';

//01. useEffect is a hook that allows you to perform side effects in function components. 

//02. It takes two arguments: a function that contains the side effect logic, and an optional array of dependencies that determine when the effect should run. 

//03.  If the dependencies change, the effect will re-run. 

//04. If the array is empty, the effect will only run once after the initial render.

//05. In this example, we use useEffect to set up a timer that increments the count state every second.

//06. We also return a cleanup function that clears the timer when the component unmounts, preventing memory leaks.

//07. useEffect says, after the component renders, run this function. 
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return <div>Count: {count}</div>;
}

export default Timer;