import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass,faShoppingCart,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';

const Header = () => {
    const [focus, setFocus] = useState(false);
    const [closeTag, setCloseTag] = useState(false);
    const handleFocus = () => {
        console.log("focus");
        setCloseTag(false);
        setFocus(true);
    }
    const handleCloseTag = () => {
        console.log("close tag");
        setCloseTag(true);
    }
    return (
        <div className="bg-white w-full shadow-lg ">
            <div className="flex items-center">
                {/* <button onClick={handleShowModel}> */}
                <div className="flex w-full flex-col m-5 ml-8">
                    <div className="flex">
                    <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 100 100"><path fill="currentColor" d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.3 29.3 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0m0 13.9c8.806 0 15.808 6.986 15.808 15.766S58.807 45.43 50.001 45.43c-8.805 0-15.81-6.982-15.81-15.763S41.196 13.901 50 13.901"></path><path fill="currentColor" d="m68.913 48.908l-.048.126l.042-.115zM34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143s-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174z" color="currentColor"></path></svg>
                    <h1 className="mt-2">Location</h1>                       
                    </div>
                    
                    <div className="flex">
                        {/* <FontAwesomeIcon className="size-8 mr-3 mt-1" icon={faMagnifyingGlass} /> */}
                        <div className="relative w-full">
                            <input type="text"
                                name="search" 
                                placeholder="Search talk"
                                autoComplete="off" 
                                aria-label="Search talk"
                                onFocus={handleFocus}
                                className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"/>
                            <FontAwesomeIcon className="absolute left-2 top-1 size-6 text-gray-500 mr-3 mt-1" icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    
                </div>
                <div className="mt-14 mr-8">
                    <FontAwesomeIcon className="size-7" icon={faShoppingCart}/>
                    <div className="absolute w-7 h-5 top-16 right-4 bg-orange-500 rounded-2xl">
                        <h2 className="pl-2.5 pb-2">0</h2>
                    </div>
                </div>
            </div>
            {focus && !closeTag ? 
                <div className="flex flex-col ml-16 pb-3">
                    <button type="button" onClick={handleCloseTag}>
                        <FontAwesomeIcon className="absolute right-7 size-6" icon={faCircleXmark} />
                    </button>
                    
                    <div className="flex justify-start space-x-6">
                        <Tag name="Canteen1"/>
                        <Tag name="Canteen2"/>
                        <Tag name="Canteen3"/>
                        <Tag name="Canteen4"/>
                        <Tag name="Canteen5"/>
                    </div>
                    <h1>Recent & Popular food</h1>
                    <div className="flex justify-start space-x-6 mt-3">
                        <Tag name="Krapao"/>
                        <Tag name="Burger"/>
                        <Tag name="Padthai"/>
                        <Tag name="Japanese food"/>
                        <Tag name="Dog"/>
                    </div>
                    
                </div> : null
            }
            
        </div>
    )
}

export default Header; 