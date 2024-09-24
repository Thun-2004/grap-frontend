
import Comment from "./Comment";

const ReviewBody = () => { 

    return (
        <div className="ml-5">
            <h1 className="big-title my-5">Reviews(2)</h1>
            <div className="flex flex-col justify-center items-center">
                <Comment username="Arhway" date="11 Sep 2024" menu="Fried dog" numStar="5" comment="Yum Yum"/>
                <Comment username="Arhway" date="11 Sep 2024" menu="Meow Meow" numStar="3" comment="I prefer fried dog"/>
                <Comment username="Arhway" date="11 Sep 2024" menu="Meow Meow" numStar="3" comment="I prefer fried dog"/>

            </div>
        </div>
    );
}

export default ReviewBody;
