import React from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCab,faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {Navbar} from "./navbar";
export function About(){
    return(
        <>
            
           <h1 className="text-success">About Page</h1>
            {/* <FontAwesomeIcon icon={faCab} className="siz"/>
            <FontAwesomeIcon icon={faUser} className="siz"/>
            <FontAwesomeIcon icon={faFacebook} className="siz"/>
            <FontAwesomeIcon icon={faFacebook} className="siz"/> */}
            
        </>
    );
}