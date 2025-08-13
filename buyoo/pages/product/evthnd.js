//import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';


function MyApp(){
     function goBack() { 
            window.history.back()
        }
    return(
        <>
        <h1>Counters that update separately</h1>
            <MyButton />
            <br/><br/>
            <MyButton />
            <br/><br/>
            <button  onClick={goBack}>Go Back</button>
            
            <Link href='/product/id?id=1'><button>Go Forword</button></Link>
        </>
    );
}

function MyButton(){
        const [count, setCount] = useState(0); // default count number 0.
        const [color, setColor] = useState("black"); // default button color

    function evthandeler() { // function call on when the button is clicked
        setCount(count + 1);
       // setColor((count % 2 == 0)? "darkgreen" : "red"); // change color on click
          setColor(getRandomColor()); // Change Rendom Color on Click
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
     
       
        return(
            <>
                <button className="countbut" style={{ color: color }}  onClick={evthandeler}> {count} Times Clicked </button>
              
            </>
        );
    }

export default MyApp;

