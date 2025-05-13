import React from "react";
import ReactDOM from "react-dom/client" 
const Header=()=>{
    return(
        <div className="header">
            <div >
                <img className="logo" src="https://imgs.search.brave.com/bbbM8VrzmP3X4rgRtEvcwdOu3MCRl7wCk68j1VMb1o8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9mb29k/LWNsb2NoZS0yODM2/bGQucG5nP253bT0x/Jm53cz0xJmluZHVz/dHJ5PWZvb2Qmc2Y9"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
            
        </div>
    )
}
const Resturantcard =()=>{
    return(
        <div className="res-card">
            <img
            className="res-logo" 
            src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/12/e986d189-bb86-44e4-ac69-2dea8f14a810_543f7697-ea34-4e62-b37e-e8d9d398fffe.JPG"/>
            <h3>Meghna Food</h3>
            <h4>Biryani, North Indian , Asian</h4>
            <h4>4.5 Rating</h4>
            <h4>30 Minutes</h4>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                <Resturantcard/>
                
            </div>
        </div>
    )
}

const Applayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)