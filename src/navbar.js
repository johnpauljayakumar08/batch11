import React from "react";
import {Link} from 'react-router-dom'
export function Navbar(){
    return(
        <>
        
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </>
    );
}