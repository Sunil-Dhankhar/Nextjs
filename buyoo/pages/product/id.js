import {useState} from 'react'; // import react useState hook
import { useRouter } from 'next/router'; //import useRouter Hook that is used to hold and extract the Param from the url
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // 👈 context ka import

function MyComponent(){     // define a functional Component 
  const ids = useRouter();  // set object value into new variable from Hook that is hold the url Param
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { id } = ids.query; // extract the id value from the object
  return (                  // return method 
    <div>                   {/* div wrap */}
      <h1>Hello</h1>        {/* wrapped element */}
      {id !== "0" && <Counter />} {/* check condition, if condition is true then embed the another component here as nested component ....Safe proceducre for use conditional hook */}
        <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>                  // end of div wrap 
  );                        // end of return method
}                           // end of main component

function Counter() {        //define an another component
  const [count, setCount] = useState(0);        //  Top-level Hook, alwayse use hook in top of the function.
  return (                                      //  return method
    <button onClick={() => setCount(count + 1)}>{/* define a button with event handler with arrow function which on click increment +1 value in count inside the setcount function and return both. */}     
      Count: {count}                            {/* print the current value of the count variable */}
    </button>                                   // end of button element
  );                                            // end of return method
}                                               // end of component
export default MyComponent;                     // Export the main Component for rendring.
