
import CanteenCard from '../../components/CanteenCard';
import RestaurantCard from '../../components/RestaurantCard';
import CarouselComponent from '../../components/CarouselComponent';
import Banner from '../../components/Banner';
import QueueCard from '../../components/QueueCard';
import Header from '../../components/Header';
import CarouselAutomate from '../../components/CarouselAutomate';
import React from 'react';

const Home = () => {
    return (
        <div className="p-7 flex">
            <div className="fixed top-0 right-0 left-0 z-10 md:left-36 sm:left-0 ">
                <Header/>
            </div>

            <div className="flex flex-col w-screen lg:w-10/12 pr-2">
                <div className="w-full mr-10 pr-10">
                    {/* for q */}
                    <CarouselAutomate/>
                </div>

                <div className="w-full mt-8 block lg:hidden">
                    <h1 className='heading-font mb-5'>My Queue(1)</h1>
                    <div className="flex">
                        <QueueCard/>
                        <QueueCard/>
                    </div>
                </div>

                <div className="">
                    <h1 className='heading-font mt-10'>Nearby Canteen</h1>
                    <CarouselComponent/>
                </div>
                
                <div className="">
                    <div className="">
                        <h1 className='heading-font'>Food from your nearest: Canteen A</h1>
                    </div>  
                    <RestaurantCard/>
                    <RestaurantCard/>
                </div>
            </div>
            <div className="w-0 lg:w-full hidden lg:block">
                <h1 className='heading-font mb-5'>My Queue(1)</h1>
                <div className="flex flex-col">
                    <QueueCard/>
                    <QueueCard/>
                </div>
            </div>
        </div>
    )
}

export default Home;