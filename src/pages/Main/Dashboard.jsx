import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import Home from "./Home";

//sidebar, header, link to other pages
const Dashboard = () => {
    return (
        <div className="flex">
            <div className="relative">
                <SideBar/>
            </div>
            <div className="flex-grow flex flex-col relative">
                <div className="fixed top-0 left-72 right-0 z-10">
                    <Header/>
                </div>
                <div className="absolute top-32 left-72 right-10">
                    <Home/>
                    
                </div>
            </div>
        </div>
    )
}; 

export default Dashboard;