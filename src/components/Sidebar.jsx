import React from 'react'
import { NavLink } from "react-router-dom"


const SideBar = () => {
    return (
        <div className="fixed w-72 h-screen bg-slate-500 flex flex-col justify-center text-center z-10">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/history">History</NavLink> */}
            <div className="absolute top-10 right-28">
                <h1>QuickDish</h1>
            </div>
            <div className="flex flex-col space-y-7">
                <h1>Home</h1>
                <h1>Favourite</h1>
                <h1>Notification</h1>
                <h1>Purchase History</h1>
                <h1>My Profile</h1>
            </div>
            
        </div>
    )
}

export default SideBar; 

