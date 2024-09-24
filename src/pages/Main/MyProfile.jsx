import React from 'react';
import PurchaseCard from '../../components/PurchaseCard';
import ProfileHeader from '../../components/ProfileHeader';
import ReviewBody from '../../components/ProfileBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const MyProfile = () => {
    const menulist = ['Profile Overview', 'Reviews', 'Photos', 'Notification','Security'];
    //try call api and manage 
    return (
        <div className="p-8 ml-10 mr-20 h-screen bg-slate-100">
            <ProfileHeader/>
            <div className="flex mt-5">
                <div className="w-1/4 p-2 flex flex-col bg-slate-100 border-2 border-slate-400 rounded-xl">
                    <div className="m-3">
                        ACTIVITY
                    </div>
                    {
                        menulist.map((menu) => {
                            return (
                                <div key={menu} className=" p-3 hover:border-l-4 hover:border-red-500 hover:bg-gradient-to-r hover:from-transparent hover:to-red-500 hover:rounded-r-lg text-slate-500 hover:text-red-500">
                                    <h1 className=''>{menu}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex-1 flex flex-col bg-slate-400">
                    <ReviewBody/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;