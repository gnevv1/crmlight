// import './App.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


import Menu from "../Menu/Menu";
import Clients from "../Clients/Clients";
import HelloPage from "../HelloPage/HelloPage";
import Profile from "../Profile/Profile.js"; 
import Hamburger from '../Hamburger/Hamburger.js'; 
import "./Workbench.css"
import Pagination from "../PaginationComp/Pagination";
import Appi from "../Clients/Apport";
import StartPage from "../startpage/startpage";
import Deals from "../Deals/Deals";
import Tasks from "../Tasks/Tasks";

function Workbench(){
    return(
        
        <div className="container col ms-2">
            <div className="row">
                <Routes>
                    <Route path = "/" element={<HelloPage />} />
                    <Route path = "/clients" element={<Clients/>} />
                    <Route path = "/tasks" element={<Tasks/>} />  
                    <Route path = "/deals" element={<Deals/>} />     
                    <Route path = "/profile" element={<Profile/>} /> 
                    <Route path = "/hamburger" element={<Hamburger/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Workbench