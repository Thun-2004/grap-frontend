import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CanteenCard from "./CanteenCard";

const CarouselComponent = () => {
    const item = [
        { id: 1, name: "Item 1",  img:""},
        { id: 2, name: "Item 2",  img:""},
        { id: 3, name: "Item 3",  img:""},
        { id: 4, name: "Item 4",  img:""},
        { id: 5, name: "Item 5",  img:""},
    ];

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