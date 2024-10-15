import React, { useState, useReducer, useEffect, useMemo, useCallback } from 'react';
import '../App.css';

const ListMemo = () => {

    const [optionValue, setOptionValue] = useState<string>('');
    const [photosArr, setPhotosArr] = useState([]);
    const options = [
        {id: 1, color: 'red'},
        {id: 2, color: 'blue'},
        {id: 2, color: 'orange'}
    ]

    const photosFetch = useMemo(() => {
        
        let num = []
        for(let i=0; i< 2000000000; i++){
            if(i < 20){
                num.push({id: i+1, todo: 'todo' + i+1})
            }
        }

        
       /* const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotosArr(data)
      //  return data
       // console.log(data)*/

       // num.push({id: i+ 1});
       console.log(optionValue)
       return num
    },[])

    const photos = photosFetch


    /*useEffect(() => {
    // const look = photosFetch
   // console.clear()
   console.log(photosFetch)
      
    },[optionValue])*/

    return (

        
        <>
        <select className='list_memo_option' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setOptionValue(e.target.value)}>
            {options.map((data, key) => {
                return <option key={key} value={data.color} style={{color: data.color}}>{data.color}</option>
            })}
        </select>
        <div>{optionValue}</div>
        <hr />
            <ul>
            {photos.map((data, key) => {
                return <li key={key}>{data.id} {data.todo}</li>
            })}
            </ul>
        </>
    )
}

export default ListMemo