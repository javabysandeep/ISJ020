import { useState } from 'react';

//Counter component is a simple React functional component that uses the useState hook to manage a count state. 
// It displays the current count and provides a button to increment the count when clicked.

//useState returns an array with two elements: 
// the current state value and a setter function to update that state.
function Counter() {
    const [count, setCountFunction] = useState(0);
    const increment = () => {
        // react will re-render the component with the new count value
        setCountFunction(count + 1);
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;