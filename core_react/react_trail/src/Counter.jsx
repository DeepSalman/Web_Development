import { useState } from "react"

export default function Counter(){
    const [count,SetCount] = useState(0);
    const handleAdd = ()=>{
        const newCount = count +1
        SetCount(newCount)
    }


    return (
        <div>
            <h3>Count:{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}