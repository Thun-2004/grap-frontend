
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark, faUpload} from "@fortawesome/free-solid-svg-icons";

const CommentWindow = ({closeModal}) => {
    const categories = ["tastiness", "hygiene", "quickness"];
    
    

    return (
        <div className='fixed top-40 left-1/4 w-3/6 max-w-3/5 min-w-2/5 p-2 z-10'>
            <div className="bg-slate-100 p-2 rounded-3xl flex flex-col shadow-xl">
                    <div className="m-3">
                    <div className="flex justify-between">
                        <h1 className='comment-heading-font'>Rate and Review your order</h1>
                        
                        <button type='button' onClick={closeModal}>
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
                                             //potential error : the same key
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
                    
                    
                    <div className="col-span-full ">
                        <label htmlFor="cover-photo" className="block comment-sub-heading-bold-font">
                            Food Image
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed bg-slate-200 border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <FontAwesomeIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" icon={faUpload} />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end">
                        <button className='general-button mt-2' type="button">
                            <h1>Submit</h1>
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
        
    );
}

export default CommentWindow;