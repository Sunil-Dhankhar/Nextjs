/*  ************************************** React *****************************************************************

    React is a Javascript Library that is used to create and design Web Pages — especially single-page applications (SPA). this is used for build User Interface (UI) like forms, Buttons, list etc.
    
    ++++++ Core Concepts of React +++++
    Component is like a Tag in uppercase, each component is written in uppercase beause the react understand Uppercase Letters in tags as Components
        like <Div/> <Header/> <Navbar/> etc each Tag in uppercase, React Understand it as React Component. where <div> in small is understable as HTML tag.
    
        1. Component => In React, Everything is a "Component". a component is bassically a Function or class that Return HTML/JSX 
                    A Small Piece of your App like Header, Navbar, Card, Button etc All are Component.

        2. JSX (JavaScript + XML) => In React we Use JSX syntax for written code like HTMl. You can write html code inside the Javascript. and you can write JS inside ({}) curly Brases like {name (a const variable)}. 

        3. Props (Properties) => in React we call Properties as Props and its used for send data inside the components.
                                suppose you are creating a Card Component and we want to send name and age data inside the component then how we send it, mentioned in below Example.

                                for Example : => function Card(props) {
                                                    return <h2>Hello, {props.name}</h2>;
                                                }

                                                // Use time // call time: name is the property and Amit is Value.
                                                <Card name="Amit" />

        4. useState Hook (React Memory Box) => This is React Hook that is used to save the value inside the components like counter Number.
                For Example => 
                                import React, { useState } from 'react'; // Import to React from react library with useState React hook.

                                function Counter() { // define the React Component
                                const [count, setCount] = useState(0);  // count = value, setCount = function for update 
                                    return (
                                        <> // react Fragment (Empty tag), this is used for wrap the elements inside react fragment, because according to react rule, one component use nr return only one element so when we wnat to return multiple elements then we required to wrap these elements into a tag if we use any html tag for wrapping this then it the script is extended as one more node..
                                            //   so we use here react fregmant (Empty tag) without extended HTML node for wrap all elements for return to Component. 
                                            <p>You clicked {count} times</p> Html tag p with number of clicked count. 
                                            <button onClick={() => setCount(count + 1)}>Click me</button> // click button for call the event when the button is clicked and setCount value +1 as well as state value (count)+1.
                                        </> // close React fragment (Wrap of Elements)
                                    ); // close return bracket.
                                } // close of rect component function.

        5. useEffect Hook (React working time with UI ) => when you need to fetch data or load data or you have to required print the data using console.log then you can use use Effect.
                For Example => 
                                import React, { useEffect } from 'react'; // Import to React from react library with useEffect React hook.

                                const Timer = () => { // Define the Rect Component as Arrow Function
                                useEffect(() => { // initilize an arrorw function inside the React hook
                                    console.log('Component mounted'); // print the message as per required.
                                    return () => console.log('Component unmounted'); // return the printed message to component via arrow function.
                                }, []); // empty array means this script run only once as (mount + unmount)

                                return <p>Check the console log.</p>;
                                };

short Summery in Hinglish
-----------------------------
    | Concept       | Kya karta hai?                                      |
    | ------------- | --------------------------------------------------- |
    | **Component** | UI ka tukda banata hai                              |
    | **JSX**       | HTML + JavaScript ko mix karne deta hai             |
    | **Props**     | Data bhejne ka tareeka hai                          |
    | **useState**  | Component ke andar data store karta hai             |
    | **useEffect** | Jab component load/update ho to kuch kaam karta hai |



    when you start a new project in React then you must install  the node 18+ version. this is compatible wih react and nextjs both. and not need to install additional server inside the system.
    use these basic commands in terminal for create new project or app like

    1: React App Setup =>   npx create-react-app my-react-app
                            cd my-react-app
                            npm start





*/