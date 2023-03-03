import React,{useState,useEffect} from "react";
export function Studetails(){
    const[details,setDetails]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })
    return(
        <>
        {
           details.map((value,index)=>(
            <>
            <div className="container-fluid row">

                <div className="card col-lg-4">
                    <img src={value.image} className="card-img-top"/>
                    <div className="card-body">
                        <h1 className="card-title">{value.title}</h1>
                        <p className="card-text">{value.description}</p>
                        <h1 className="card-text">Price:{value.price}</h1>
                    </div>

                </div>
            </div>
            </>
           )) 
        }
        </>
    );
}