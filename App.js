import React, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"; 
import About from "./About";
import Contact from "./Contact";
import Error from "./Error"; 
import Menu from "./Menu"
import Grocery from "./Grocery";

const Grocery = lazy(() =>
  import("./Grocery")
);
const Applayout = () => {
    return <div className="app">
    <Header/>
    <Outlet/> </div>; };
const appRouter = createBrowserRouter([
   {path :  "/",
  element: <Applayout/>,
  children:[
    {path : "/",
    element:  <Body />},
    {path : "/Grocery",
    element:  <Grocery />},

    {path :"/about",
    element:<About />},
  
    {path : "/contact",
    element:  <Contact />},
    {
        path :"/restaurant/:resid",
        element: <Menu />}
  ],
  errorElement:<Error/>  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider   router = {appRouter}  />);
