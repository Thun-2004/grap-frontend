import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CanteenCard from "./CanteenCard";
import { getCanteenData } from "../api/canteenApi";

const CarouselComponent = () => {
    const [canteens, setCanteens] = useState(null); 
    useEffect(() => {
        const fetchData = async() => {
            try{
                const data = await getCanteenData(); 
                setCanteens(data);
            }catch(error){
                console.log("Error fetching: ", error);
            }
        };
        fetchData();
    }, []);  //empty arry = run once on mount

    if (canteens == null){
        return <div> Loading... </div>;
    }

    const item = canteens.map(canteen => ({
        id: canteen.id,
        name: canteen.name,
        img: canteen.img
    }))

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1024 },
        items: 4
        },
        desktop: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 464, min: 0 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return (
            <Carousel className="z-0" responsive={responsive} renderDotsOutside={true}>
                {item.map(it => (
                    <CanteenCard key={it.id} canteenName={it.name} img={it.img}/>
                ))}
            </Carousel>
    );
}

export default CarouselComponent;