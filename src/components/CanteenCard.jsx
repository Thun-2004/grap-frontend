
const CanteenCard = ( {canteenName, img} ) => {
    return (
        <div className="bg-white w-64 h-64 mt-3 mb-10 ml-20 rounded-2xl shadow-md hover:shadow-xl relative">
            {/* <div className="w-full h-full rounded-2xl bg-slate-300">
                
            </div> */}
            <img className="w-full h-full rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/56f2595e8a65e2db95a7d983/1519814666566-3PK9PIBIPPDEALLBE6AX/Workplace+Canteens+%285%29.jpg?format=1500w" alt="" />

            <h1 className="absolute bottom-2 left-2 text-lg text-white">{canteenName}</h1>
        </div>
    );
}

export default CanteenCard;
