
import CanteenCard from '../../components/CanteenCard';
import RestaurantCard from '../../components/RestaurantCard';
import CarouselComponent from '../../components/CarouselComponent';

const Home = () => {
    return (
        <div className="p-7">
            <div className="">
                {/* for q */}
            </div>
            <div className="">
                <h1 className='title'>Nearby Canteen</h1>
                <CarouselComponent/>
            </div>
            <div className="">
                <h1 className='title'>Food from your nearest: Canteen A</h1>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
            
        </div>
    )
}

export default Home;