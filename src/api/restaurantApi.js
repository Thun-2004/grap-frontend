import axios from "axios";

export const getRestaurantData = async (restaurantID) => {
  try {
    const restaurant = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/${restaurantID}`
    );

    if (restaurant.status === 200) {
      return restaurant.data;
    }

    console.log(
      `Error fetching restaurant data status: ${restaurant.status}: body: ${restaurant.data}`
    );
    return null;
  } catch (error) {
    console.log("Error fetching: ", error);
    return null;
  }
};

export const getRestaurantImage = async (restaurantID) => {
  try {
    const image = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/${restaurantID}/image`,
      { responseType: "blob" }
    );

    if (image.status === 200) {
      return image.data;
    }

    console.log(
      `Error fetching restaurant image status: ${image.status}: body: ${image.data}`
    );
    return null;
  } catch (error) {
    console.log("Error fetching: ", error);
    return null;
  }
};

export const getFoodItems = async () => {
  try {
    const response = await axios.get(
      "https://595fb64e-7a39-4905-b0d3-e976d8c5f828.mock.pstmn.io/getFoods"
    );
    console.log("response: ", response.data);
    return response.data;
  } catch (error) {
    console.lgo("Error fetching: ", error);
    return null;
  }
};
