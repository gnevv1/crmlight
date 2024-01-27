import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Clients from "./Clients/Clients"
import HelloPage from "./HelloPage/HelloPage"
import Menu from "./Menu/Menu"
import Workbench from "./Workbench/Workbench";

import Tasks from "./Tasks/Tasks";
import Deals from "./Deals/Deals";
import Profile from "./Profile/Profile.js"; 
import Hamburger from './Hamburger/Hamburger.js'; 

function App() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <Menu />
      <Workbench /> 
    </div>
    </div>
  </>
  );
}
// 
export default App;
