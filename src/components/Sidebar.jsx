import React from 'react'
import { NavLink } from "react-router-dom"


const SideBar = () => {
    return (
        <div className="fixed w-72 h-screen bg-slate-500 flex flex-col justify-center text-center z-20">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/history">History</NavLink> */}
            <div className="absolute top-10 right-28">
                <h1>QuickDish</h1>
            </div>
            <div className="flex flex-col space-y-7 justify-items-center">
                <button type="button" className="sidebar-button">Home</button>
                <button type="button" className="sidebar-button">Favourite</button>
                <button type="button" className="sidebar-button">Notification</button>
                <button type="button" className="sidebar-button">Purchase History</button>
                <button type="button" className="sidebar-button">My Profile</button>
            </div>
            
        </div>
    )
}

export default SideBar; 

