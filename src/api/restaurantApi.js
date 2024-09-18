
import axios from 'axios'; 

export const getFoodItems = async () => {
    try{
        const response = await axios.get("https://595fb64e-7a39-4905-b0d3-e976d8c5f828.mock.pstmn.io/getFoods"); 
        console.log("response: ", response.data);
        return response.data; 
    }catch(error){
        console.lgo("Error fetching: ", error);
        return null; 
    }
}