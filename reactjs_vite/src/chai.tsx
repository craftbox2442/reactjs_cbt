import { useState } from "react";

export function Chai()
{
    return (
        <div>
            <h1>Chai ravi </h1>
        </div>
    );
}

export function Chai2()
{
    //let count = 10;
let [count,setCount]= useState(0);
    const addvale = () => {
        if(count < 10)
        {
            setCount(count + 1);
        }
        
        
    }
    return (
        <div>
            <h1>Counter value : {count}</h1>
            <button
            onClick={addvale}
            >Click me</button>
            <h1>Counteererr value : {count}</h1>
            <h1>Couwerwrwenter value : {count}</h1>
        </div>
        
    );
}
export default Chai;