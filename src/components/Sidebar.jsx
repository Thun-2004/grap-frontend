import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBookmark, faComment,faClockRotateLeft,faUser, faUtensils, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
    return (    
        <div className="fixed left-8 md:w-28 w-0 h-screen py-4">
            <div className='bg-gradient-to-b from-[#FC7413] to-[#A71818] h-full w-full rounded-xl justify-center text-center flex flex-col z-20'>
                <div className="md:flex md:grow hidden mx-auto">
                    <div className="flex flex-col w-full grow justify-between items-center py-7">
                        <FontAwesomeIcon className="text-5xl text-white" icon={faUtensils} />
                        <div className="flex flex-col space-y-10 items-center">
                            <NavLink to="/">
                                <button type="button" className="sidebar-button">
                                    <FontAwesomeIcon icon={faHouse} className="sidebar-icon"/>
                                </button>
                            </NavLink>
                            <NavLink to="/favourites">
                                <button type="button" className="sidebar-button">
                                    <FontAwesomeIcon icon={faBookmark} className="sidebar-icon"/>
                                </button>
                            </NavLink>
                            <NavLink to="/favourites">
                                <button type="button" className="sidebar-button">
                                    <FontAwesomeIcon icon={faComment} className="sidebar-icon"/>
                                </button>
                            </NavLink>
                            <NavLink to="/purchase_history">
                                <button type="button" className="sidebar-button">
                                    <FontAwesomeIcon icon={faClockRotateLeft} className="sidebar-icon" />
                                </button>
                            </NavLink>
                            <NavLink to="/myprofile">
                                <button type="button" className="sidebar-button">
                                    <FontAwesomeIcon icon={faUser} className="sidebar-icon"/>
                                </button>
                            </NavLink>
                        </div>
                        <FontAwesomeIcon className="sidebar-button text-3xl" icon={faArrowRightFromBracket} />
                    </div>
                </div>
                
                <div className="lg:hidden md:hidden fixed bottom-0 right-0 w-full bg-gradient-to-b from-[#FC7413] to-[#A71818] h-16 flex justify-around items-center">
                    <button type="button" className="sidebar-button text-2xl"><FontAwesomeIcon icon={faHouse} className="bottom-bar-icon"/></button>
                    <button type="button" className="sidebar-button text-2xl"><FontAwesomeIcon icon={faBookmark} className="bottom-bar-icon"/></button>
                    <button type="button" className="sidebar-button text-2xl"><FontAwesomeIcon icon={faComment} className="bottom-bar-icon"/></button>
                    <button type="button" className="sidebar-button text-2xl"><FontAwesomeIcon icon={faClockRotateLeft} className="bottom-bar-icon"/></button>
                    <button type="button" className="sidebar-button text-2xl"><FontAwesomeIcon icon={faUser} className="bottom-bar-icon"/></button>
                </div>
            </div>
        </div>

    );
}

export default SideBar; 

