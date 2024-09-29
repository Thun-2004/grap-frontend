
const QueueCard = () => {  

    return (
        <div className="relative w-72 h-64 lg:w-full bg-gradient-to-b from-orange-500 to-orange-700 p-2 mr-2 mb-5 shadow-2xl rounded-2xl">
            <img className="rounded-2xl w-full h-60" src="/card2.png" alt="" />
            <div className="absolute top-5 left-14">
                <h3 className="comment-heading-font ml-4">Queue: 44</h3>
                <p className="comment-sub-heading-bold-font">Status: preparing</p>
            </div>
            
            <div className="absolute top-32 left-10">
                <h3 className="comment-sub-heading-bold-font">Mc Donald's-Prathep</h3>
                <p className="comment-sub-heading-font">Foods: BigMac</p>
                <p className="comment-sub-heading-font">Estimated time: 11.05 AM</p>

            </div>
        </div>
    );
}

export default QueueCard;