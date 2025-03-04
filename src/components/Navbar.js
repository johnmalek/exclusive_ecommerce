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
            
            <div className="search-bar">
                <input type="text" placeholder="What are you looking for?" />
                <button className="search">🔍</button>
            </div>
            <div className="icons">
                <span className="icon favorite">&#9825;</span>
                <span className="icon cart">&#128722;</span>
            </div>
        </nav>
        <hr className="hr"/>
       </>
    );
}

export default Navbar;