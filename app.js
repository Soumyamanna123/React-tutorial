import React from "react";
import ReactDOM from "react-dom/client" 

const parent= React.createElement("div", {id:"parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1",{}, "Im An h1 tag"),
        React.createElement("h2",{}, "Im An h2 tag"),
    ]),
    React.createElement("div", {id: "child"},[
        React.createElement("h1",{}, "Im An h1 tag"),
        React.createElement("h2",{}, "Im An h2 tag"),
    ]),
])
// console.log(parent)




const heading= React.createElement(
    "h1",
    {id:"heading"},
    "hello world from react"
    );
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);