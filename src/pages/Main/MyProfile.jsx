import React from 'react';
import PurchaseCard from '../../components/PurchaseCard';
import ProfileHeader from '../../components/ProfileHeader';
import ReviewBody from '../../components/ReviewBody';
import ProfileBody from '../../components/ProfileBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const MyProfile = () => {
    const menulist = ['Profile Overview', 'Reviews', 'Photos', 'Notification','Security'];
    //try call api and manage 
    return (
        <div className="p-8 ml-10 mr-20 h-screen">
            <div className="">
                <ProfileHeader/>
            </div>

            <div className="fixed top-80 left-44 w-1/4 p-2 h-80 flex flex-col bg-white border-2 border-slate-400 border-opacity-50 rounded-xl">
                <div className="m-3 title">
                    ACTIVITY
                </div>
                {
                    menulist.map((menu) => {
                        return (
                            <div key={menu} className=" p-3 hover:border-l-4 hover:border-orange-500 hover:bg-gradient-to-r hover:from-transparent hover:to-orange-500 hover:rounded-r-lg text-slate-500 hover:text-red-500">
                                <h1 className=''>{menu}</h1>
                            </div>
                        )
                    })
                }
            </div>
            
            {/* <div className="relative top-80 flex mt-5">
            <div className="relative top-64 w-full h-full flex mt-5">
                <div className="absolute left-96 w-3/4 h-full flex-1 flex flex-col ml-10 rounded-2xl">
                    <ReviewBody/>
                </div>
            </div> */}

            {/* <div className="relative top-80 flex mt-5"> */}
            <div className="fixed overflow-scroll top-72 left-[640px] w-3/5 h-full flex mt-5 ">
                {/* <div className="absolute top-2 w-full h-full flex flex-col rounded-2xl"> */}
                <div className="relative w-full flex flex-col rounded-2xl">
                    <ProfileBody/>
                    {/* <ReviewBody/> */}
                </div>
            </div>
        </div>
    )
}

export default MyProfile;