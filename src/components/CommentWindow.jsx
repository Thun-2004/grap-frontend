
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

const CommentWindow = () => {
    const categories = ["tastiness", "hygiene", "quickness"];
    return (
        <div className="bg-slate-100 w-3/6 max-w-3/5 min-w-2/5 p-2 rounded-3xl mb-6 flex flex-col shadow-xl">

            <div className="m-3">
                <div className="flex justify-between">
                    <h1 className='comment-heading-font'>Rate and Review your order</h1>
                    <button type='button'>
                        <FontAwesomeIcon className="comment-heading-font hover:text-red-600" icon={faXmark} />
                    </button>
                </div>
                <hr className="border-t-2 border-black mt-3 mb-3"/>
                
                {
                    categories.map((category, index) => (
                        <div key={index} className="flex flex-col sm:flex-row justify-center mt-2">
                            <h1 className='comment-sub-heading-bold-font mt-1'>{category}</h1>
                            <div>
                                {
                                    [
                                        ...Array(3).fill(0).map((_, i) => (
                                            <FontAwesomeIcon icon={faStar} key={i} className="m-1 size-7 text-yellow-500"/>
                                        )),
                                        ...Array(2).fill(0).map((_, i) => (
                                            <FontAwesomeIcon icon={faStar} key={i} className="m-1 size-7 text-blue-950"/>
                                        ))
                                    ]
                                }
                            </div>
                        </div> 
                    ))
                }

                <h1 className="comment-sub-heading-bold-font">Review</h1>
                {/* add comment */}
                <textarea className="rounded-xl p-2 w-full" name="" id="" placeholder='write your comment'></textarea>
                
                <div className="">
                    <h1 className="comment-sub-heading-bold-font mt-2 mb-1">Attach image</h1>
                    {/* <div className="overflow-hidden rounded-md w-full h-36 mb-3 bg-slate-300">
                        <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg" alt="" />
                    </div> */}
                    <button className="general-button" type="button">
                        Upload image
                    </button>
                </div>

                <div className="flex justify-end">
                    <button className='general-button mt-2' type="button">
                        <h1>Submit</h1>
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}

export default CommentWindow;