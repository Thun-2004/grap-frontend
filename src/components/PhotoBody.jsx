const PhotoBody = () => {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return(
        <div className="ml-5">
            <h1 className="big-title my-5">Photos(2)</h1>
            <div className="grid-container">
                {
                    images.map((_, index) => (
                        <img key={index} className="h-60 bg-slate-600 rounded-xl shadow-2xl" src="" alt="" />
                    ))
                }
                
            </div>
        </div>
    ); 
}

export default PhotoBody;