
import CanteenCard from '../../components/CanteenCard';
import RestaurantCard from '../../components/RestaurantCard';

const Home = () => {
    return (
        <div className="p-7">
            <div className="">
                for q
            </div>
            <div className="">
                <h1>Nearby Canteen</h1>
                <div className="flex mb-9">
                    <CanteenCard canteenName="Canteen1" img=""/>
                    <CanteenCard canteenName="Canteen1" img=""/>
                    <CanteenCard canteenName="Canteen1" img=""/>
                    <CanteenCard canteenName="Canteen1" img=""/>
                    <CanteenCard canteenName="Canteen1" img=""/>
                </div>
            </div>
            <div className="">
                <h1>Food from your nearest: Canteen A</h1>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
            
        </div>
    )
}

export default Home;