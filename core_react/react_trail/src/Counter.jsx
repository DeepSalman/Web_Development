import { useState } from "react"

export default function Counter(){
    const [count,SetCount] = useState(0);
    const handleAdd = ()=>{
        const newCount = count +1
        SetCount(newCount)
    }
    const reset = ()=>{
        
        SetCount(0);
    }


    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}