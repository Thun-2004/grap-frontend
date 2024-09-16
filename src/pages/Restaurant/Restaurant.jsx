import { useState } from "react";
import { getRestaurantData, getRestaurantImage } from "../../api/restaurantApi";

const Menu = ({ restaurantID }) => {
    const [restaurant, setRestaurant] = useState(undefined)

    if (restaurant === undefined) {
        const getData =
            async () => {
                const restaurantData = await getRestaurantData(restaurantID)
                const restaurantImage = await getRestaurantImage(restaurantID)

                console.log(restaurantImage)

                setRestaurant({
                    data: restaurantData,
                    image: restaurantImage,
                    menus: []
                })
            }

        getData()
    }

    const fullMenu = ({ data, image }) => (
        <div className="mx-auto">
            <img
                src={URL.createObjectURL(image)}
                className="
                    top-0 absolute w-[100%] h-auto max-h-[25vh] object-center 
                    object-cover  min-h-40 drop-shadow-2xl
                "
            />
            <div className="
                bg-slate-50 rounded-xl w-fit p-4 mx-auto min-w-[50%] mt-16
                drop-shadow-xl
            ">
                <h1 className="text-2xl mb-4">{data.name}</h1>
                <hr></hr>
                <div>
                    <div className="flex justify-between py-1">
                        <div className="text-red-00">Busy</div>
                    </div>
                    <hr></hr>
                    <div className="flex justify-between py-1">
                        <div className="mr-2">Current Queue</div>
                        <div>32</div>
                    </div>
                    <hr></hr>
                    <div className="flex justify-between py-1">
                        <div>Rating and Review</div>
                        <div>4.7/5.0</div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {
                restaurant ?
                    fullMenu(restaurant)
                    : <div>Loading...</div>
            }

        </div >
    )
}

export default Menu;