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
          <h1>H1 Tag has changed with ag83 and look at new one</h1>
          <h2>added h2 tag</h2>
          <h3>added really h3 tag from me</h3>
          <h1>a new tag</h1>
          <h2>from other side</h2>
          <h5>this from 83 the ga</h5>
          <h5>this is the second file line for fetch</h5>
          <h5>new one <span>from me</span><span>I changed the text in span</span></h5>
          <h6>from co-worker</h6>
          <p>from co-worker one more tag</p>     
        </>
    )
   
}

export default SomeModule
