import axios from 'axios'; 

export const getCanteenData = async () => {
    try{
        const response = await axios.get("https://8caccc42-a1cd-4bba-845c-7dedfe4de271.mock.pstmn.io/getcanteens"); 
        console.log("response: ", response.data);
        return response.data; 
    } catch (error) {
        console.log("Error fetching: ", error);
        return null; 
    }
    
}

//not done
export const getCanteenFromId = async (canteenId) => {
    const response = await axios.get(`/getcanteens/${canteenId}`); 
    return response.data; 
}


