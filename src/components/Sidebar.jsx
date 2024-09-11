import React from 'react'
import { NavLink } from "react-router-dom"


const SideBar = () => {
    return (
        <div className="w-72 h-screen bg-slate-500 fixed flex flex-col justify-center text-center">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/history">History</NavLink> */}
            <h1>Home</h1>
            <h1>Favourite</h1>
            <h1>Notification</h1>
            <h1>Purchase History</h1>
            <h1>My Profile</h1>
        </div>
    )
}

export default SideBar; 

