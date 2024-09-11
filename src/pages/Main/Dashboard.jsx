import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
import Home from "./Home";

//sidebar, header, link to other pages
const Dashboard = () => {
    return (
        <div className="relative">
            <Header/>
            <div className="flex h-screen">
                <SideBar/>
                <div className="flex-1 w-screen p-4 mt-32 ml-72"> 
                    {/* should shrink when sidebar is open */}
                    <Home/>
                </div>
            </div>
        </div>
    )
}; 

export default Dashboard;