import React, {useState} from "react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import Home from "./Home";
import PurchaseHistory from "./PurchaseHistory";
// import MyProfile from "./MyProfile";

//sidebar, header, link to other pages
const Dashboard = () => {
    return (
        // <div className="flex">
        //     <div className="relative w-72 md:w-60 lg:w-72">
        //         <SideBar/>
        //     </div>
        //     <div className="flex-grow flex flex-col">
        //         <div className="fixed top-0 left-72 right-0 z-10">
        //             <Header/>
        //         </div>
        //         <div className="absolute top-32 left-72 right-10">
        //             <Home/>
        //             {/* <PurchaseHistory/> */}
        //             {/* <MyProfile/> */}
        //         </div>
        //     </div>
        // </div>
        <div className="flex">
            <div className="relative">
                <SideBar/>
            </div>
            <div className="flex-grow flex flex-col">
                {/* <div className="fixed top-0 lg:left-72 md:left-60 sm:left-60 right-0 z-10"> */}
                <div className="fixed top-0 right-0 left-0 z-10 lg:left-72 md:left-60 sm:left-0 ">
                    <Header/>
                </div>
                {/* <div className="absolute top-32 right-10 lg:left-72 md:left-60 "> */}
                <div className="absolute top-32 right-0 left-0 lg:left-72 md:left-60 sm:left-0">
                    <Home/>
                    {/* <PurchaseHistory/> */}
                    {/* <MyProfile/> */}
                </div>
            </div>
        </div>
    )
}; 

export default Dashboard;