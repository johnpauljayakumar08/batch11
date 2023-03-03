import React,{useState,useEffect} from "react";

function Counter(){
    const[firstnumber,setFirstnumber]=useState(10);
    
    return(
        <>
            <h1>Counter</h1>
            <h1>{firstnumber}</h1>
            <button onClick={()=>setFirstnumber(firstnumber+10)}>Increment</button>
            <button onClick={()=>setFirstnumber(firstnumber-1)}>Decrement</button>
            <button onClick={()=>setFirstnumber(firstnumber*0)}>Reset</button>
           
        </>
    );
}
export default Counter;