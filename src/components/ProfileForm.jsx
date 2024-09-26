import React, { useState } from "react";

const ProfileForm = () => { 
    const [name, setName] = useState("Arhway Larhuna");
    return (
        <div className="">
            <form>
                <div className="mb-6">
                    <label htmlFor="displayName" className="block mb-2 profile-heading-font ">Display Name</label>
                    <input type="text" id="displayName" className="profile-text-box" value={name} onChange={(event) => {setName(event.target.value)}} required />
                </div> 
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 profile-heading-font">Email address</label>
                    <input type="email" id="email" className="profile-text-box" value="john.doe@company.com" required />
                </div> 
                <div className="mb-6">
                    <label htmlFor="phoneNumber" className="block mb-2 profile-heading-font">Phone Number</label>
                    <input type="text" id="phoneNumber" className="profile-text-box" value="0xx-xxx-xxxx" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 profile-heading-font">Username</label>
                    <input type="text" id="username" className="profile-text-box" value="arhwayL" required />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="displayName" className="block mb-2 profile-heading-font">Password</label>
                        <input type="text" id="first_name" className="profile-text-box" value="John" required />
                    </div>
                    <div className="mt-10">
                        <button type="button" className="general-button">
                            <h1 className="text-white">Change Password</h1>
                        </button>
                    </div>
                    <div className=""></div>
                    <button type="submit" className="general-button">Update Changes</button>

                </div>
                
            </form>
        
        </div>
    ); 
}

export default ProfileForm;