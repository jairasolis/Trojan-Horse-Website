import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/nav/Navbar";
export default function StudentLayout(props){
    return (
        <div id="root-student">
            <Navbar/>
            <Outlet/>
        </div>
    )
}