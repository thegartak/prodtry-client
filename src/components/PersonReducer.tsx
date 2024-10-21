import React, { useState, useReducer, useEffect } from 'react';
import '../App.css';


type ReduceStateProps = {
    id: number;
    some: string;
}


type ReduceActionProps = 
    | { type: 'add'; payload: {id: number | null, inputText: string}}
    | { type: 'remove'; payload: {id: number | null, inputText: string}}


const initialList: ReduceStateProps[] = [];

const listReduce = (state : ReduceStateProps[], action: ReduceActionProps) => {
    console.log(action)
    switch(action.type){
        case 'add' :
            return [...state, {
                id: Date.now(), some: action.payload.inputText
            }]
        case 'remove': 
            const result = state.filter((data) => data.id !== action.payload.id)
            return result
        default:
            return state
    }
}


const PersonReducer = () => {
    const [input, setInput] = useState<string>('');
    const [list, listDispatch] = useReducer(listReduce, initialList);

    const [val, setVal] = useState<number>(1);

    type funcProps = {
        name: string
        age: number
    }

    const [arr, setArray] = useState<funcProps>(
        {
         name: '',
         age: 0
        }
    )



    const func = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArray({...arr, [e.target.name]: e.target.value})
    }

    const clearInt = () => {
        console.log('timer is working')
            setVal(val => val +1)        
    }

  

    useEffect(() => {
        console.log(list)

        if(val === 1){
            const si = setInterval(clearInt,1000)
        

        return () => {
            console.log('look')
            setVal(2)        
           clearInterval(si)
         };
        }
    }, [list])


    return (
        <>
        <div>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} /> 

            <input type="text" name="name" onChange={func} /> 
            <input type="text" name="age" onChange={func} /> 

            <button onClick={() => listDispatch({type: 'add', payload: {id: null, inputText: input}})}>Add</button>
            
        </div>
        <hr />
            <ol>
        {list.map((data, key) => {
            return (
                <li key={key} style={{margin: '10px 0' }}>{data.some}
                    <button onClick={() => listDispatch({type: 'remove', payload: {id: data.id, inputText: ''}})}>Remove ({data.id})</button>
                    <h5>this is the first file line for fetch</h5>
                </li> 
            )
        })}
        </ol>
        {arr.name} - {arr.age}
        <hr />
        {val}
        </>
    )
}

export default PersonReducer