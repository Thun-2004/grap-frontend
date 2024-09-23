import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookmark, faComment,faClockRotateLeft,faUser, faUtensils, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
    return (    
        // <div className="bg-gradient-to-b from-[#FC7413] to-[#A71818] fixed lg:w-72 md:w-60 w-0 h-screen flex flex-col justify-center text-center z-20">
        //     {/* <NavLink to="/">Home</NavLink>
        //     from-pink-500 to-orange-400
        //     bg-gradient-to-b from-[#FC7413] to-[#A71818]
        //     <NavLink to="/history">History</NavLink> */}
        //     <div className="lg:block md:block hidden">
        //         <div className="absolute top-10 right-28 ml-10 md:ml-5">
        //             <h1>QuickDish</h1>
        //         </div>
        //         <div className="flex flex-col space-y-7 justify-items-center">
        //             <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faHouse} className="sidebar-icon"/>Home</button>
        //             <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faBookmark} className="sidebar-icon"/>Favourite</button>
        //             <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faComment} className="sidebar-icon"/>Notification</button>
        //             <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faClockRotateLeft} className="sidebar-icon" />Purchase History</button>
        //             <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faUser} className="sidebar-icon"/>My Profile</button>
        //         </div>
        //     </div>
            
        //     <div className="lg:hidden md:hidden fixed bottom-0 right-0 w-full bg-gradient-to-b from-[#FC7413] to-[#A71818] h-16 flex justify-around items-center">
        //         <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faHouse} className="bottom-bar-icon"/>Home</button>
        //         <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faBookmark} className="bottom-bar-icon"/>Favourite</button>
        //         <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faComment} className="bottom-bar-icon"/>Notification</button>
        //         <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faClockRotateLeft} className="bottom-bar-icon"/>History</button>
        //         <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faUser} className="bottom-bar-icon"/>Profile</button>
        //     </div>
            
        // </div>
        <div className="fixed left-8 md:w-28 w-0 h-screen py-4">
            {/* <NavLink to="/">Home</NavLink>
            from-pink-500 to-orange-400
            bg-gradient-to-b from-[#FC7413] to-[#A71818]
            <NavLink to="/history">History</NavLink> */}
            <div className='bg-gradient-to-b from-[#FC7413] to-[#A71818] h-full w-full rounded-xl justify-center text-center flex flex-col z-20'>
                <div className="lg:block md:block hidden">
                    <div className="flex flex-col space-y-56 md:space-y-44 ">
                        <FontAwesomeIcon className="text-5xl text-white" icon={faUtensils} />
                        <div className="flex flex-col align-middle space-y-7">
                            <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faHouse} className="sidebar-icon"/></button>
                            <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faBookmark} className="sidebar-icon"/></button>
                            <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faComment} className="sidebar-icon"/></button>
                            <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faClockRotateLeft} className="sidebar-icon" /></button>
                            <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faUser} className="sidebar-icon"/></button>
                        </div>
                        <FontAwesomeIcon className="sidebar-button text-3xl" icon={faArrowRightFromBracket} />
                    </div>
                </div>
                
                <div className="lg:hidden md:hidden fixed bottom-0 right-0 w-full bg-gradient-to-b from-[#FC7413] to-[#A71818] h-16 flex justify-around items-center">
                    <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faHouse} className="bottom-bar-icon"/>Home</button>
                    <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faBookmark} className="bottom-bar-icon"/>Favourite</button>
                    <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faComment} className="bottom-bar-icon"/>Notification</button>
                    <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faClockRotateLeft} className="bottom-bar-icon"/>History</button>
                    <button type="button" className="sidebar-button"><FontAwesomeIcon icon={faUser} className="bottom-bar-icon"/>Profile</button>
                </div>
            </div>
            
            
        </div>

    )
}

export default SideBar; 

