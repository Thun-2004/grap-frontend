import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const ProfileHeader = () => {
    return (
        <div className='fixed top-5 left-1 md:left-16 sm:left-1 w-screen h-64 px-24 z-20'>
        <div className="relative w-full h-64 rounded-3xl bg-slate-400">
            <div className="w-full h-full bg-orange-500 rounded-3xl">
                {/* <h1 className='text-3xl align-middle'>QuickDish</h1> */}
            </div>
            <div className="absolute flex flex-col md:flex-row sm:flex-col justify-between top-0 w-full h-full rounded-3xl bg-gradient-to-b from-transparent to-black opacity-80 z-10">
                <div className="flex items-center space-x-8 ml-5 ">
                    <img className="w-40 h-40 rounded-full bg-slate-700 border-solid border-4 border-white z-20" src="" alt="" />
                    <h1 className='text-3xl font-bold text-white z-20'>Arhway Larhuna</h1>
                </div>
                <div className="flex flex-col justify-center items-end sm:items-start sm:mb-2 mr-4">
                    <div className="mb-5 ml-20">
                        <button className="p-3 px-4 bg-red-500 rounded-xl flex" type="button">
                            <FontAwesomeIcon className="text-white mt-1 mr-2" icon={faPenToSquare} />
                            <h1 className='text-white text-bold'>Edit profile</h1>
                        </button>
                    </div>
                    <div className="flex space-x-3">
                        <div className="flex flex-col text-white items-center">
                        <h1>0</h1>
                        <h1>Reviews</h1>
                        </div>
                        <div className="flex flex-col text-white border-x-2 px-3 items-center">
                        <h1>0</h1>
                        <h1>Photos</h1>
                        </div>
                        <div className="flex flex-col text-white justify-items-center items-center">
                        <h1>0</h1>
                        <h1>Followers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
    ); 
}

export default ProfileHeader;