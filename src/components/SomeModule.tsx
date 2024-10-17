import React, { useState, useReducer, useEffect } from 'react';
import '../App.css';







const SomeModule = () => {
    const [input, setInput] = useState({
        name: 'John',
        age: () => {return 'look'}
    });


    async function someFnc(){

     const fetchPost =  await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: '12',
        }),
     //   credentials: "include", // include, *same-origin, omit
      });

      let result = await fetchPost.json();
      console.log(result)
    }
 
 //   someFnc();

    return (
        <>
          <h1>H1 Tag has changed the second time</h1>
          <h2>let's add h2 tag</h2>
        </>
    )
   
}

export default SomeModule