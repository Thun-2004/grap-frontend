
const QueueCard = () => {  

    return (
        <div className="relative w-full h-64 bg-white mb-5">
            <img className="rounded-2xl" src="/queueCard.png" alt="" />
            <div className="absolute top-3 left-5">
                <h3 className="comment-heading-font">Queue: 44</h3>
                <p className="comment-sub-heading-bold-font">Status: preparing</p>
            </div>
            
            <div className="absolute top-32 left-5">
                <h3 className="comment-sub-heading-bold-font">Mc Donald's-Prathep</h3>
                <p className="comment-sub-heading-font">Foods: BigMac</p>
                <p className="comment-sub-heading-font">Estimated time: 11.05 AM</p>

            </div>
        </div>
    );
}

export default QueueCard;