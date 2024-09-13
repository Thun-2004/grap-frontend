import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard = ( {storeName, food, img, canteenName, busyness, queue, rating} ) => {
    return (
        <div className="bg-slate-300 w-full h-52 mt-3 mb-6 ml-10 rounded-lg shadow-lg relative">
            <img src={ img } alt="" />
            <h2 className="absolute bottom-2 left-2">Restaurant</h2>
            <button type="button">
                {/* change to black when click  */}
                <FontAwesomeIcon className="absolute right-4 size-7" icon={faFlag} />
            </button>
            

        </div>
    );
}

export default RestaurantCard;