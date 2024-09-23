import React, {useState} from "react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import Home from "./Home";
import PurchaseHistory from "./PurchaseHistory";
// import MyProfile from "./MyProfile";

//sidebar, header, link to other pages
const Dashboard = () => {
    return (
        <div className="flex">
            <div className="relative">
                <SideBar/>
            </div>
            <div className="flex-grow flex flex-col">
                <div className="fixed top-0 right-0 left-0 z-10 md:left-36 sm:left-0 ">
                    <Header/>
                </div>
                <div className="absolute top-32 right-0 left-0 md:left-40 sm:left-0">
                    {/* <Home/> */}
                    <PurchaseHistory/>
                    {/* <MyProfile/> */}
                </div>
            </div>
        </div>
    )
}; 

export default Dashboard;