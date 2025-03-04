import React from "react";

function Navbar(){
    return(
       <>
        <nav>
            <div className="heading">
                <h4>Exclusive</h4>
            </div>
            <ul className="nav-links">
                <li><a className="active" href="home.js">Home</a></li>
                <li><a href="pages/contact.js">Contact</a></li>
                <li><a href="pages/about.js">About</a></li>
                <li><a href="pages/signup.js">Sign Up</a></li>
            </ul>
        </nav>
        <hr className="hr"/>
       </>
    );
}

export default Navbar;