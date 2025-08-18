/*  ************************************** React *****************************************************************

     { ES7+ React/Redux/React-Native } Snippets extention for vs code.

    React is a Javascript Library that is used to create and design Web Pages — especially single-page applications (SPA). this is used for build User Interface (UI) like forms, Buttons, list etc.
    in React app you Create Components, that are small pieses or blocks parts of UI. You can create nesting of componenets means create component inside another component.
    each component is a part of single UI like Button, card or Full page.
            In React a javascript function is called a Component that return some Markup data that we display on browser. React Component starts with a capital letter. 
    That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.
    
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

    React App or Nextjs Setup =>     npx create-next-app@latest my-next-app --javascript
                                        cd my-next-app
                                        npm run dev

                                        now your browser open AS http://localhost:3000

        An Example of small React App :- 
                                        function MyButton() { //React Component
                                            return ( //another Component with nesting
                                                <button> // createing button 
                                                    I'm a button this is an react app
                                                </button>// close button
                                            ); //close nested component
                                        } // closed react component or block

                                        export default function MyApp() { //main React component
                                            return ( // another nested component
                                                <div> // start div tag for wrap elements
                                                    <h1>Welcome to my app</h1> // first element.
                                                    <MyButton /> // loading or calling another component in this component while wraping elements, means the calling component markup also wrap with this component markup.
                                                </div> //end of div tag 
                                            );//end of nested component
                                        } // end of main component.
    
    🔀 React Router => React Router is a standard library for routing in React applications. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL. 
                        in simple terms, it helps to manage the navigation and rendering of different components based on the URL. means the page doesnt reload, but content is updated dynamically with url change.

    
    
    
    📦  export default –  Specify to Main Component =>
                    When you code main component inside the React file and then after you export that component with export default keyword taht means this exported component is main component of the React file and if you import the react file then this main component is exported by default in the impoted rect file and this exported component must be used.
    
    📝  Writing Markup with JSX =>  In React app when you write markup (Like <h1>Hello</h1>) HTML tags or nodes that are actual JSX. JSX is Optional but almost every Developer use this for markup because its to easy for write and read the code.
                                        JSX is Strict Script language and it ensure that if a tag is opend then should be close. if not Close then this throw an error
                                        like <br/> </h1> </div>.
                                        each component is return single element, so if you want to retutn multiple elements then wrap multiple elements into a tag or react freagment tag (<> ---</>).
                        For Example => return <h1>Hi</h1><p>Welcome</p>; // ❌ Invalid return
                                       return (<div> <h1>Hi</h1><p>Welcome</p> </div>); // Valid - Wrap in <div>
                                       return (<> <h1>Hi</h1><p>Welcome</p> </>); // Valid - Wrap in empty fragment <>
    
    🎨  Adding Styles in React => In React when you want to apply css then you use classname keyword like class in html. this work similar to html class keyword. this is react Attribute that is used in css for styling similar to html attribute.
                    for example =>  ( jsx file ) <img classname="sidePanel"/>
                                    ( css file ) .sidePanel{ border-radius: 50%; } // this convert the image in circle mode.
                React also provide a feature like Html that you can also link a css file or include a file with help of <link> link tag.
                    for  Example => <link rel="stylesheet" href="styles.css" />

    🖼️  Displaying Data in JSX => React provide a feature to use Mixup of Javascript + Markup inside a JSX File, means jsx file is combination or mixup of Javascript and markup(XML). ypu can use both together.

    🔄 Curly Braces {} Uses =>  if you have required to display javascript variable value in jsx file then you use {javascript variable} inside the markup tags where the value is required. 
                    For Example => const user = { name:"Amit", age: 25 };
                                    function Welcome(){ return <h1>Hello, {user.name} ! </h1>; } // output => Hello , Amit !
                    here you see in example {user.name} is a javascript variable object property or variable that we embeded inside the <h1> tag. and we got out put with javascript variable value with markup data.
                    In React, Not only inside content, also you can use javascrip variable inside the markup attributes or react attributes but still use here {javascript varibale} curly braces. because the jsx identify {} in form of javascript variables.
                    when you use Classname="avtar", then the classname pass a string that represent only class name for css, but when you use src={user.imgurl} then this evaluate javascript code and after pass javascript variable value dynamically. means this Set a javascript variable value into markup attribute. 
                    For Example => const user = { name:"Amit", age: 25, imgalt: "mr. Modi", imgsize: 100, imgurl:"https://example.com/amit.jpg"};
                                    function Welcome(){ 
                                                        return ( 
                                                                <> 
                                                                    <h1>Hello, {user.name} ! </h1> // javascript variable embeded inside the markup under React ap component.
                                                                     <img classname="avtar" src={user.imgurl} /> // // JavaScript expression inside JSX
                                                                </>
                                                                ); 
                                                    } // output => Hello , Amit ! and after that an image will be print here
                                            here image src is dynamic value that is grabbed from the user object.
    🔀 Complex Expressions in Curly Braces => you can write complex expression inside the curly braces. e.g 
                    <h1> { "Hello" + user.name + "!"}</h1> // concatinate the string value with object value and output will be => Hello, Amit ! 
                OR  <img src={user.imgurl+"?size=small&width=500&height=350px"} // Concatenate the javascript object value (dynamic value) with "string value" and set it into <img> tag src Attribute. 
                
            <img src={user.imgurl} alt={user.imgalt} style={{ height:user.imgsize, width:user.imgsize}} />//here you see complexity of expression that we used double curly braces {{---}} inside the <img> tag attribute where first/outer curly brace is represent to use javascript object/ variable and second/inner curlybraces to use javascrip style property as object that is grabed from javascript object or variable.
                According to React Rule it doesn't matter that the style object values are dynamic or static, if you are styling the object element then in style prop of react you should always use double {{}}, because the react always expect the style property as object, so for full fill this condition we use {{}} for converting the style prop into object.
                    for example => if you write like this      <img style="width: 100px; height: 100px;" />            then this code become invalid in react but in html is right.
                so we use this syntax as object like        <img style={{ width: 100, height: 100 }} />      this script is valid in react but in html this become invalid.

    ✅ Conditional Rendering in React => there is no Special conditional syntax in React for write conditional statement.. you use same javascript patteren for write the conditional statement in React according to requirement.
                        you can use this conditional syntaxes inside the jsx file also Like (if, ? :, &&, etc.).
                        the logical condition use two type one is outside the jsx or another is inside the jsx file.
                        outside jsx => condition check before the return like
                                        function Car(){
                                            if(car.brand == "Hundai"){ return <h1>Welcome to {car.brand} family </h1>;} // output Welcome to Hundai family
                                            else
                                            { return return <h1> Welcome to {car.brand} family</h1>;} // output Welcome to TATA family
                                        }
                        Inside jsx => Using ternary operator(? :) inside jsx
                                        function Loginprocess(){
                                            return (
                                                    <> {isLoggedIn ? "Welcome Back !!" : "Please Log In"} </> // output based on condition if condition is true and user login success then return / print Welcome Back else return / Print please log In first 
                                                    OR
                                                    <> {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)} </>  // output based on condition if condition is true then return <AdminPanel /> Component else return <LoginForm /> Component value. 
                                            );
                                        }
                        Inside jsx => Using Logical AND (&&) for short conditions
                                        function Mailbox(msg){
                                            return (
                                                    <>
                                                        <h1>Hello!</h1>
                                                        {msg.length > 0 && (<p>You Have {msg.length} Unread Message </p>)} // here the message will print when the condition is true. this type of condition applied when you dont have required of else part. and need a short script under condition.
                                                        OR
                                                        {msg.length > 0 && (<AdminLogin />)} // if condition is true then return or print the AdminPanel Component script or data.
                                                    </>
                                                );
                                        }

    ✅ Conditionally Specifying Attributes in JSX => In React you can also set attributes on the bases of condition. like (disabled, src, alt, classname etc.)
                        for Example => <button disabled={isLoading}> // set attribute as object value based on condition true or false
                                            {isLoading ? 'Loading...' : 'Click Me'} // ternary condition check isLoading variable or object exist or not if exist then return Loading... else return Click Me as false condition.
                                        </button>

    📋 Rendering Lists in React => In React if you want to rendor (return and display) multiple object elements like (list of products), then you can use Map method of javascript.
                            for Example => const products = [                                       // define an array as variable.
                                                                { title: 'Cabbage', id: 1 },        // define objects as array elements.
                                                                { title: 'Garlic', id: 2 },         // define objects as array elements.
                                                                { title: 'Apple', id: 3 },          // define objects as array elements.
                                                            ];

                                                            function ShoppingList() {               // define or Create a Function as Component.
                                                                return (                            // return the component value when component is call.
                                                                    <ul>                            // unordered list start.
                                                                    {products.map((product) => (    // javascript map method is applied on each element of array object.
                                                                        <li key={product.id}        // asign or set id of product to key prop of li for uniqeueness.
                                                                        style={{                    // start styling 
                                                                                color: product.isFruit ? 'magenta' : 'darkgreen'}} // set li color as per condition;  
                                                                        
                                                                        {product.title}             // define or print the product name or titile
                                                                        </li>                       // end of list item </li>
                                                                    ))}                             // end of the loop
                                                                    </ul>                           // end of unordered list </ul>
                                                                );                                  // end of return method or function.                    
                                                            }                                       // end of the component.

                        here you see that from the list of array the map method grab or extract each value or element and return this for rendring as requirement like render in unorder list
                        In React, Map method  transform each value of array object into JSX Element.

                        🔑 Keys in Lists => when you rendring a list of array using .map() in react then its mendatory to provide key prop for uniqeness in siblings, because React track each sibling for update, delete, or reorder the list.
                                            In list or <li> we provide product.id as uniqeue identifier a key prop. that provide Help to React for efficiently update the selected key li item as per selectd product.id .
                        
                        👆 Conditional Styling => In Inline styling  we use a condition that if the item is frui then the color of item is convert as megenta else item color convert into darkgreen.
                                                this is a Powerfull featur of React that you can use condition or js expression like ternary expression inside the style.

    🖱️ Responding to Events => For handle event in React, you can Create a event handaler function inside the React Component.
                    
                        for Example =>  function MyButton() { //React Component
                                        function handleClick() { // initilize a new function 
                                            alert('You clicked me!'); // on call this function send a alert with message.
                                        }

                                        return (                            // return function for return JSX markup data 
                                            <button onClick={handleClick}>  // initilize a button with onClick Event handler 
                                            Click me                        // button name
                                            </button>                       // end of button
                                        );                                  // end of return function.
                                    }                                       // end of main component

                Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button. in simple terms we can say that...
                Note that onClick={handleClick} is just refernce of the function not call the function. when we use handleClick() then this call the function, but in React when we provide a refernce of the function in event Handler then when button clicked ( Event handler ), then React Automatically call the function on behalf on the reference.

    🔄 Updating the screen => sometime you want that the component remember some information like 'how many time button is clicked'. so for grab or store this information we use State "useState" Hook.
                First, import useState from React: like => import {useState} from 'react';
                Now you can declare a state variable inside your component:
                    for Example => function MyButton() {                                // Start new Component
                                        const [count, setCount] = useState(0);          // declaring state value is (0) into array elements count and setCount
                                        // ... 
                                You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). 
                                The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter.
                    for Example => function MyButton(){
                                       const [count, setCount] = useState(0);
                                       
                                       function evthandeler(){
                                            setCount(count+1);
                                       }
                                        return(
                                            <button onClick={evthandeler}> {count} Times Clicked </button>
                                        );
                                    }
                                    function MyApp(){
                                        return(
                                            <>
                                                <MyButton />
                                                <MyButton />
                                            </>
                                        );
                                    }
                export default MyApp; // when you use Nextjs and your component is inside of pages/ folder then its mendatory to export default  to component.  
                Because,
                When you use Next.js then Next.js requires that each file inside the pages/ directory:
                    *    Has a default export
                    *    Exports a valid React component.
            in this component the state is initilized with 0 value and when the button is clicked the reference function is automatically called and function script call the script mention function count +1 means count value + 1 and after increment in count value this return latest count value into setCount function and count variable.
            everytime when the button is clicked then the new updated value will be display to you as markup html file.

            If you render the same component multiple times, each will get its own state. Click each button separately,
            means, when you create a Component and render same comonent multiple time like  <MyButton /> <MyButton />, you see each increment his own value not other because each component has its own state. and after click the each component change own state.

    🔧 Using Hooks => In React Hooks are Special Function theat provide provision for use state or lifecycle features in React functional Components.
                        Each hooks start with use, you can say hook is start with prefix 'use' like useState, useEffect, useRef, etc.
                        
                        for Example=> const [count, setCount] = useState(0) // declare the state as 0 value.
                                        this is useState hook that provide count named State variable and setCount named update function 
                                ⚠️ Important Rules for Hooks =>
                               ---------------------------------
                                    React Hooks Follows some Rules =>
                                        1. Always Call hooks in top-level part of Component. dont write or call inside Loops, Condition, or nested function
                                                for example => function MyApp(){ const [count, setCount] = useState(0);}
                                        2. create another component and check inside the created component that the condition is true if true then the embed or nest the another component here.
                                                for example => function MyButt{ {id !== "0" && <MyApp />} }   
                                                
    🔀 Transfer data between components =>

        when you pass the data through the url then dont use <a> tag because the html <a> tag lost the react properties while click on linke page with <a> tag because it reload the full page. and when page full reloading then it lost the properties or data like state, location, path,  etc.
        when you use React or NEXT.JS, always use <Link href="---"> or in simple React <Link to="----"> because when we use this it just reload the small part or a component from the page rather then entire page. it helps to create faster app or web app.
        when we use React or next.js the sender page and receiver page required some properties from react or next.js so you can provide these prop into the files where you required to use hook. 
        Like => send property => import Link from 'next/link'; // this is used to import the link properties for pass the link with data
                Receive property => import { useRouter } from 'next/router'; // this is used for import the router features or properties into this project. this is also used as hook for receive or extract the url holded values from the object.
            👏 there are various ways to transfer the data between the components. 
                some methods are :=>    
                    1. URL params (router.query) => transfer the data using url property and passed data is display in url also.       
                    2. React Context API => transfer the data from one component to another component using api technique. and its transfere data never display into the url
                    3. Redux/Zustand     => this is also transfer data from one component to another component without showing data into url.
                    4. Session/Local Storage => this is temprary storage that store the data and where you need this data into your project you can use this stored data. this is also not display data into the url.

                🔁  React Context API => React Context API is like a global storage where you can store the data. you can access this stored data into any component of the project, like its storage shared box where you store the data, when you required this data then you can easily grab this data from the storage.
                   
                                    1.) import hook from react using => import React, { createContext, useState } from 'react';
                                    2.) create a Context using the hook like => export const ThemeContext = createContext();
                                    3.) Create a New Component => export const ThemeProvider = ({ children }) => { // this is the comonent where children is props of this component that is used to wrap the each component who inside this this  component.
                                    4.) Create a New State for store the current value of the state => const [theme, setTheme] = useState('light'); // and setTheme is the function where state is changed.
                                    5.) create a function for change the state according to requirement like 
                                                        const toggleTheme = () => {
                                                            setTheme(theme === 'light' ? 'dark' : 'light');
                                                        };
                                    6.) return the created context with its value to all components inside(children).                    

                                    a.) Import React and ReactDom. 
                                    b.) Import app component, this is your main UI component
                                    c.) Import ThemeProvider component from the another file where you have build this.

                                    d.) create a new const Variable with arrow function which return the Themeprovider wraped component, this component wraped the App Component into themeprovider component and return this for rendring.
                                    
                                    
                                    for Example => index.js
                                    ________________________
                                    
                                            import React from 'react'; 
                                            import App from './app';
                                            import { ThemeProvider } from './ThemeContext';
                                            
                                            const HomePage = () => {
                                                return (
                                                    <ThemeProvider>
                                                        <App />
                                                    </ThemeProvider>
                                                );
                                            };
                                                    
                                            export default (HomePage);
                                            
                                    app.js =>
                                    __________

                                            import React, { useContext } from 'react';
                                            import { ThemeContext } from './ThemeContext';
                                            import Link from 'next/link';

                                            const App = () => {
                                            const { theme, toggleTheme } = useContext(ThemeContext);

                                            const appStyle = {
                                                backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
                                                color: theme === 'light' ? '#000000' : '#ffffff',
                                                minHeight: '100vh',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexDirection: 'column',
                                            };

                                            return (
                                                <div style={appStyle}>
                                                <h1>{theme.toUpperCase()} MODE</h1>
                                                <button onClick={toggleTheme}>Toggle Theme</button>
                                                <br/>
                                                <Link href="/product/shop"> <button>Shop here</button> </Link>
                                                </div>
                                            );
                                            };

                                            export default App;

                                    ThemeContext.js =>
                                    ___________________

                                            // ThemeContext.js
                                            import React, { createContext, useState } from 'react';

                                            // Context create karo
                                            export const ThemeContext = createContext();

                                            export const ThemeProvider = ({ children }) => {
                                                const [theme, setTheme] = useState('light');

                                                // Theme toggle karne ka function
                                                const toggleTheme = () => {
                                                    setTheme(theme === 'light' ? 'dark' : 'light');
                                                };

                                                return (
                                                    <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                                        {children}
                                                    </ThemeContext.Provider>
                                                );
                                            };


                            your-app/
                        *----------*
                            ├── src/
                            │   ├── index.js         ← App rendering
                            │   ├── App.js           ← Component that use UI and theme 
                            │   └── ThemeContext.js  ← define the Theme context 


                        ✅ What has been done in this app?
                            
                            1.    Theme system is created using React Context — to manage light and dark mode.

                            2.    A ThemeContext is made, which stores:

                                    a.    The current theme (light or dark)

                                    b.    A function to toggle the theme (toggleTheme)

                            3.    A ThemeProvider component is created, which provides this theme data to the whole app.

                            4.    The main App component is wrapped inside ThemeProvider, so all child components can access the theme.

                            5.    In App.js, the theme is used to change background and text color, and a button is added to toggle the theme.

                            6.    Everything is split into separate files for clean and modular code:

                                    a.    ThemeContext.js → for theme logic

                                    b.    App.js → for UI

                                    c.    HomePage.js or index.js → to render the App with ThemeProvider.

                🔁 Redux => Redux is a state management library that used to manage data inside the React. 
                                    Suppose, if your app have multiple components that they are using same data like user login status, cart items, theme, etc then everywhere sending of props is very complaxing so like this type of situation or condition Redux Playing a Role and helping us 
                                    
                                       ➡️ How help Redux => 
                                        
                                            1. Redux is like a Centerlized Hub. where each of state is stored.
                                            2. Send an action to Redux for telling that what to do. then After the Reducers decide that how's  State is change or Update.
                                                
                🔁 Zustand => Zustand is a German word that means "State". this is also a state management Library, but its lightweight and simple then Redux library. 
                                this have not boilerplate and also have not complexity like action/reducers formal system. 
                                in Zustand just create a hook and use this. its like a Plug and Play Hook.

*/