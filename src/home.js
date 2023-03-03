import React from "react";
import img1 from './download.jfif'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "./navbar";
function Home(){
    return(
        <>
            
            <FontAwesomeIcon icon={faEnvelope}/>
            <h1 className="text-danger">Home Page</h1>
            <img src={img1}/>

        </>
    );
}
export default Home;