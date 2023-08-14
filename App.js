import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"; 
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error"; 
import { useContext ,useEffect} from "react";
import Menu2 from "./src/components/Menu2";
// import {userName} from "./src/utilities/userName";
import userName from "./src/utilities/userName";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";
import appStore from "./src/utilities/appStore";
// import Grocery from "./Grocery";
const Grocery = lazy(() =>
  import("./src/components/Grocery")
);
// const {loginuser} = useContext(userName);

const Applayout = () => {
  const [userId,setUserId] = useState("");
  useEffect(() =>{
   const data={
    name: "sneha singh"
   };
    setUserId(data.name)
  },[])

    return (
      <Provider store={appStore}>
        <userName.Provider value={{ loginuser: userId }}>
          <div className="app">
            <Header />
            <Outlet />{" "}
          </div>
        </userName.Provider>
      </Provider>
    ); };


const appRouter = createBrowserRouter([
   {path :  "/",
  element: <Applayout/>,
  children:[
    {path : "/",
    element:  <Body />},
    {path : "/cart",
    element:  <Cart />},

    {path : "/Grocery",
    element:( 
      <Suspense fallback = {<h1>LOADING.....</h1>}>
      <Grocery />
      </Suspense>) },
    {path :"/about",
    element:<About />},
    {path : "/contact",
    element:  <Contact />},
    {   path :"/restaurant/:resid",
        element: <Menu2 />} ],
  errorElement:<Error/>  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider   router = {appRouter}  />);
