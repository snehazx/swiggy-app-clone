import React, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"; 
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error"; 
import Menu from "./src/components/Menu"
// import Grocery from "./Grocery";

const Grocery = lazy(() =>
  import("./src/components/Grocery")
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
    element:( 
      <Suspense fallback = {<h1>LOADING.....</h1>}>
      <Grocery />
      </Suspense>)
  },

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
