import { React, useState } from 'react'

const Header = (props) => {
    const {handleShowModel} = props; 
    return (
        <div className="bg-white fixed top-0 left-0 w-full flex h-28 items-center shadow-lg z-10 justify-around">
            <h1>QuickDish</h1>
            {/* <button onClick={handleShowModel}> */}
            <div className="flex flex-col">
                <h1>Location</h1>
                <input type="text" name="search" placeholder="Search talk" autocomplete="off" aria-label="Search talk" className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"></input>
            </div>
            <h1>Cart</h1>
            {/* <button onClick="">
                <i className="text-white fa-solid fa-cart-shopping"></i>
            </button> */}
        </div>
    )
}

export default Header; 