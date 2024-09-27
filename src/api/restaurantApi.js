import axios from 'axios';

export const getRestaurant = async (restaurantID) => {
  try {
    const restaurant = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/${restaurantID}`,
    );

    if (restaurant.status !== 200) {
      console.log(
        `Error fetching restaurant data status: ${restaurant.status}; 
        body: ${restaurant.data}`,
      );
      return null;
    }

    return restaurant.data;
  } catch (error) {
    console.log('Error fetching: ', error);
    return null;
  }
};

export const getMenuImage = async (menuId) => {
  try {
    const image = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/menus/${menuId}/image`,
      { responseType: 'blob' },
    );

    if (image.status === 200) {
      return image.data;
    }

    console.log(
      `Error fetching menu image status: ${image.status};
         body: ${image.data}`,
    );
    return null;
  } catch (error) {
    console.log('Error fetching: ', error);
    return null;
  }
};

export const getRestaurantMenus = async (restaurantID) => {
  try {
    const menus = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/${restaurantID}/menus`,
    );

    if (menus.status !== 200) {
      console.log(
        `Error fetching restaurant menus status: ${menus.status}; 
            body: ${menus.data}`,
      );
      return null;
    }

    return menus.data;
  } catch (error) {
    console.log('Error fetching: ', error);
    return null;
  }
};

export const getRestaurantImage = async (restaurantID) => {
  try {
    const image = await axios.get(
      process.env.QUICKDISH_BACKEND_URL + `/restaurants/${restaurantID}/image`,
      { responseType: 'blob' },
    );

    if (image.status === 200) {
      return image.data;
    }

    console.log(
      `Error fetching restaurant image status: ${image.status};
       body: ${image.data}`,
    );
    return null;
  } catch (error) {
    console.log('Error fetching: ', error);
    return null;
  }
};

export const getMenuCustomizations = async (menuID) => {
  try {
    const customizations = await axios.get(
      process.env.QUICKDISH_BACKEND_URL +
        `/restaurants/menus/${menuID}/customizations`,
    );

    if (customizations.status !== 200) {
      console.log(
        `Error fetching menu customizations status: ${customizations.status}; 
        body: ${customizations.data}`,
      );
      return null;
    }

    return customizations.data;
  } catch (error) {
    console.log('Error fetching: ', error);
    return null;
  }
};
