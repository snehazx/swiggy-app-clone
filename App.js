import React from "react";
import  ReactDOM  from "react-dom";
import "../swiggy/index.css"
import Header from "./Header";
import Body from "./Body";
  
const Applayout = () => {
    return <div className="app">

    <Header/>
    
    <Body/></div>; 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
