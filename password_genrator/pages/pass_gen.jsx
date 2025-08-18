"use client"; // use client  is used to enable client-side rendering, means when you use nextJS then each component is server Component, so its direct not accessable, for use these component use client  method that convert this component into client component.
import { useState, useCallback, useEffect, useRef } from 'react'; // imports hooks from react Library

function Passgen() // initilize a new Component (JS function )
{ 
    const [length, setLength] = useState(8); // initialize state for password length
    const [nums, setNums] = useState(false); // initialize state for including numbers
    const [chars, setChars] = useState(false); // initialize state for including special characters
    const [password, setPassword] = useState(""); // initialize state for generated password
    const passwordRef = useRef(null); // create a ref for the password input
    const generatePassword = useCallback(() => { // function to generate password
        const lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // set lowercase and uppercase letters value into variable
        const numbers = "0123456789"; // set numbers value into variable
        const special = "!@#$%^&*()_+[]{}|;:,.<>?"; // set special characters value into variable
        let charSet = lower; // set lower variable value into charSet variable
        if (nums) charSet += numbers; // check condition if nums is existing
        if (chars) charSet += special; // check condition if chars is existing
        let pwd = ""; // initialize empty string variable
        for (let i = 0; i < length; i++) { // start for loop from 0 to length with increment
            pwd += charSet.charAt(Math.floor(Math.random() * charSet.length)); // add random character from charSet variable to pwd
        }
        setPassword(pwd); // call setPassword with the generated password
    },[length, nums, chars]); // add dependencies for useCallback

    const copyPass = useCallback(() => { // function to copy password to clipboard
        if (passwordRef.current) {      // check if passwordRef is current
            passwordRef.current.select(); // select the password text
            //document.execCommand("copy"); // copy the selected text into clipboard (this is outdated version )
            navigator.clipboard.writeText(passwordRef.current.value); // copy the selected text into clipboard (modern way for clipboard access)
        } // end if
    }, [passwordRef]); // add dependencies for useCallback

    useEffect(() => { // useEffect to generate password on dependency change
        generatePassword(); // call generatePassword method when dependencies change
    }, [length, setNums, setChars, generatePassword]);
    return( // start of the return statement
    //    UI part is start from here.
       <div className="w-full mt-170 max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 bg-gray-800 text-orange-500"> {/* main div  for wrapper */}
            <h1 className="text-2xl font-bold mb-4">Password Generator</h1> {/* title about App */}
                <div className="flex shadow rounded-lg overflow-hidden mb-4" > {/* sub wrapper for input and button */}
                    <input type="text"                                         
                            value={password} 
                            placeholder="Password" 
                            className="border-2 border-white outline-none w-full py-2 px-9" 
                            readOnly ref={passwordRef}   /> 
                    <button className=" outline-none bg-green-500 text-white px-3 py-0 shrink-0"  
                            onClick={copyPass}>Copy</button>
                </div>                                                          {/* end of sub wrapper for input and button */}
                <div className='flex text-sm gap-x-2'>                          {/* sub wrapper for range and checkboxes controls */}
                    <div className='flex items-center gap-x-1'>                 {/* sub wrapper for range control */}
                        <input type="range"                                     
                               min="6" 
                               max="24" 
                               value={length} 
                               className="slider accent-green-500" 
                               style={{ accentColor: "#0c9c41ff" }} 
                               onChange={(e) => { setLength(e.target.value) }} />
                        <label className="text-white text-lg">Range({length})</label> {/* label for range input */}
                    </div>                                                          {/* end of sub wrapper for range control */}
                    <div className='flex items-center gap-x-1'>                     {/* sub wrapper for checkbox control */}    
                        <input type="checkbox"                                      
                               className="accent-green-500" 
                               style={{ accentColor: "#0c9c41ff" }} 
                               defaultChecked={nums} id="nums" 
                               onChange={(e)=> { // handle change
                                    setNums((prev) => !prev) // call method to update state from previous value true to false and vice versa
                                    }} /> 
                        <label className="text-white text-lg">Numbers</label> {/* label for numbers checkbox */}
                    </div>                                                                        {/* end of sub wrapper for checkbox control */}
                    <div className='flex items-center gap-x-1'>                                   {/* sub wrapper for checkbox control */}
                        <input type="checkbox" 
                               className="accent-green-500" 
                               style={{ accentColor: "#0c9c41ff" }} 
                               defaultChecked={chars} 
                               id="chars" 
                               onChange={(e)=> { // handle change 
                                        setChars((prev) => !prev) // call method to update state from previous value true to false and vice versa
                                        }} />
                        <label className="text-white text-lg">Characters</label> {/* label for characters checkbox */}      
                    </div>
                </div>
        </div>

    )
}

export default Passgen;