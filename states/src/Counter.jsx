import { useState } from "react";
export default function Counter(){
    let [count,setCount] = useState(0);
   let IncreaseCount = () => {
    setCount(count+1)
    console.log(count)
   }
   



    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={IncreaseCount}>Increase Count</button>

        </div>
    )
}