import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"; 
// import {ReactProvider} from "react-router-dom";
// import { RouterProvider} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error"; 
import Menu from "./Menu"
const Applayout = () => {
    return <div className="app">

    <Header/>
    <Outlet/>
    </div>; 
};
const appRouter = createBrowserRouter([
   {path :  "/",
  element: <Applayout/>,
  children:[
    {path : "/",
    element:  <Body />},

    {path :"/about",
    element:<About />},
  
    {path : "/contact",
    element:  <Contact />},
    {
        path :"/restaurant/:resid",
        element: <Menu />
    }


  ],
  
  
  
  errorElement:<Error/>  },

 



])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider   router = {appRouter}  />);
