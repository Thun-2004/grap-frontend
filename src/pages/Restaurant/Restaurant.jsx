import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Decimal from 'decimal.js';
import defaultRestaurantImage from '../../assets/defaultRestaurant.jpeg';
import defaultMenuImage from '../../assets/defaultMenu.webp';

import {
  faPlus,
  faMinus,
  faBasketShopping,
  faClock,
  faLocationDot,
  faClose,
  faEdit,
  faTrash,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {
  getRestaurant,
  getRestaurantImage,
  getRestaurantMenus,
  getMenuImage,
  getMenuCustomizations,
} from '../../api/restaurantApi';
import { LoadingPage } from '../../components/LoadingPage';

const BasketPopup = ({ orders, restaurant, onClose }) => {
  const [thisOrders, setThisOrders] = useState([...orders]);
  const [customizing, setCustomizing] = useState(null);

  return customizing != null ? (
    <OrderPopup
      restaurant={restaurant}
      onClose={() => {
        setCustomizing(null);
      }}
      menu_id={customizing.menu_id}
      defaultQuantity={customizing.quantity}
      defaultOptions={customizing.options}
      defaultRequest={customizing.request}
      onConfirmation={(newOrder) => {
        let replacingIndex = thisOrders.findIndex((x) => x === customizing);
        thisOrders[replacingIndex] = {
          menu_id: customizing.menu_id,
          quantity: newOrder.quantity,
          options: newOrder.options,
          request: newOrder.request,
        };
        setThisOrders([...thisOrders]);

        setCustomizing(null);
      }}
      confirmationText={'Confirm'}
    />
  ) : (
    <div
      className="
        fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 flex
      "
    >
      <div
        className="
          bg-white my-10 rounded-2xl drop-shadow-2xl p-6 flex flex-col 
          mx-auto min-w-[80%] md:min-w-[70%]
        "
      >
        <FontAwesomeIcon
          icon={faClose}
          className="absolute self-end hover:cursor-pointer z-10"
          onClick={() => {
            onClose(thisOrders);
          }}
        />

        <div className="flex flex-col justify-between h-full">
          <div
            className="overflow-y-auto flex flex-col flex-grow"
            id="orders-list"
          >
            <h1 className="text-2xl font-semibold">Basket</h1>
            <hr className="my-2" />
            {thisOrders.length == 0 ? (
              <div
                className="
                  flex flex-row flex-grow text-center justify-center
                "
              >
                <div className="self-center flex flex-col gap-y-2">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-4xl" />
                  <div className="text-lg font-extralight italic">No Order</div>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col gap-y-2">
              {thisOrders.length == 0
                ? null
                : thisOrders.map((order) => (
                    <div
                      className="
                    bg-slate-50 shadow-inner rounded-md flex flex-row 
                      overflow-hidden p-2
                  "
                    >
                      <img
                        src={
                          restaurant.menus[order.menu_id].image == null
                            ? defaultMenuImage
                            : URL.createObjectURL(
                                restaurant.menus[order.menu_id].image,
                              )
                        }
                        className="
                        aspect-square h-24 sm:h-32 object-cover object-
                        center rounded-xl drop-shadow-md self-center
                      "
                      />
                      <div className="flex flex-row justify-between flex-grow">
                        <div className="flex flex-col px-4 flex-grow">
                          <div className="text-lg font-semibold line-clamp-1">
                            {restaurant.menus[order.menu_id].name}
                          </div>
                          <hr className="my-1"></hr>
                          <div
                            className="
                              text-sm font-extralight line-clamp-2 
                              sm:line-clamp-3
                            "
                          >
                            {order.request == ''
                              ? 'No Extra Request'
                              : order.request}
                          </div>
                        </div>
                        <div
                          className="
                        flex flex-col items-end pr-2 justify-between
                      "
                        >
                          <div className="text-lg font-semibold">
                            {`฿${calculatePrice(
                              restaurant,
                              order.menu_id,
                              order.options,
                              order.quantity,
                            )}`}
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm inline">x</div>
                            <div className="text-lg font-semibold pl-1">
                              {` ${order.quantity}`}
                            </div>
                          </div>
                          <div className="flex flex-row gap-x-2">
                            <FontAwesomeIcon
                              icon={faEdit}
                              className="
                                hover:cursor-pointer hover:text-orange-400
                              "
                              onClick={() => {
                                console.log('edit');
                                setCustomizing(order);
                              }}
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="hover:cursor-pointer hover:text-red-400"
                              onClick={() => {
                                setThisOrders(
                                  thisOrders.filter((x) => x !== order),
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <div className="flex flex-row justify-center mt-4">
            <div
              className={
                `bg-gradient-to-r p-3 rounded-xl
                drop-shadow-lg hover:cursor-pointer hover:shadow-2xl flex
                flex-row gap-x-5 md:gap-x-10 ` +
                (thisOrders.length == 0
                  ? 'from-gray-300 to-gray-400 text-red-700'
                  : 'from-orange-300 to-red-400')
              }
            >
              <FontAwesomeIcon icon={faBasketShopping} className="text-2xl" />
              <div className="">
                {thisOrders.length == 0 ? 'No Orders' : `Proceed to Checkout`}
              </div>
              <div>{`฿${thisOrders.reduce(
                (acc, x) =>
                  acc.plus(
                    calculatePrice(
                      restaurant,
                      x.menu_id,
                      x.options,
                      x.quantity,
                    ),
                  ),
                new Decimal(0),
              )}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderPopup = ({
  restaurant,
  menu_id,
  defaultQuantity,
  defaultOptions,
  defaultRequest,
  onClose,
  onConfirmation,
  confirmationText,
}) => {
  const [ordering, setOrdering] = useState({
    quantity: defaultQuantity,
    options: defaultOptions,
    request: defaultRequest,
  });

  const requiredSelected = () =>
    Object.values(restaurant.menus[menu_id].customizations)
      .filter((c) => c.required)
      .every((c) => c.options.some((o) => ordering.options.includes(o.id)));

  return (
    <div
      className="
        fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 flex
      "
    >
      <div
        className="
          bg-white my-10 rounded-2xl drop-shadow-2xl p-6 flex flex-col 
          mx-auto min-w-[80%] md:min-w-[70%]
        "
      >
        <FontAwesomeIcon
          icon={faClose}
          className="absolute self-end hover:cursor-pointer z-10"
          onClick={() => onClose()}
        />
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-y-auto flex flex-col">
            <h1 className="text-2xl font-semibold">
              {restaurant.menus[menu_id].name}
            </h1>
            <hr className="my-2" />
            {restaurant.menus[menu_id].description != null ? (
              <div>
                <div className="font-light text-sm mb-4">
                  {restaurant.menus[menu_id].description}
                </div>
              </div>
            ) : null}

            {Object.values(restaurant.menus[menu_id].customizations).map(
              (customization) => (
                <div className="px-2">
                  <div
                    className="
                      flex flex-row justify-between items-center space-x-2
                    "
                  >
                    <h1 className="text-xl font-semibold">
                      {customization.unique
                        ? `${customization.title} (Choose One)`
                        : customization.title}
                    </h1>
                    {customization.required ? (
                      <div className="text-red-700 font-light italic">
                        required
                      </div>
                    ) : null}
                  </div>
                  <hr className="my-2" />
                  {customization.description != null ? (
                    <div className="text-sm font-light">
                      {customization.description}
                    </div>
                  ) : null}
                  <div
                    className="
                      flex flex-col bg-slate-50 p-2 rounded-md shadow-inner
                      my-2
                    "
                  >
                    {customization.options.map((option) => (
                      <>
                        <div
                          className="
                            flex flex-row justify-between items-center
                          "
                        >
                          <div className="flex flex-row space-x-2">
                            <input
                              type="checkbox"
                              checked={ordering.options.includes(option.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  if (customization.unique) {
                                    setOrdering({
                                      ...ordering,
                                      options: [
                                        ...ordering.options.filter(
                                          (id) =>
                                            !customization.options.some(
                                              (o) => o.id === id,
                                            ),
                                        ),
                                        option.id,
                                      ],
                                    });
                                  } else {
                                    setOrdering({
                                      ...ordering,
                                      options: [...ordering.options, option.id],
                                    });
                                  }
                                } else {
                                  setOrdering({
                                    ...ordering,
                                    options: ordering.options.filter(
                                      (id) => id !== option.id,
                                    ),
                                  });
                                }
                              }}
                            />
                            <div className="my-1">
                              <h1 className="text-sm font-light">
                                {option.name}
                              </h1>
                            </div>
                          </div>
                          {option.extra_price != null ? (
                            <div className="font-light text-sm">
                              {`+${new Decimal(option.extra_price)}`}
                            </div>
                          ) : null}
                        </div>
                        <hr></hr>
                      </>
                    ))}
                  </div>
                </div>
              ),
            )}

            <div className="px-2">
              <h1 className="text-xl font-semibold">Customer Request</h1>
              <hr className="my-2" />
              <textarea
                className="
                  w-full bg-slate-50 shadow-inner p-2 font-light text-sm 
                  resize-none  min-h-20 focus:outline-none rounded-md
                "
                placeholder="Extra Request to the Restaurant"
                value={ordering.request}
                onChange={(e) =>
                  setOrdering({
                    ...ordering,
                    request: e.target.value,
                  })
                }
                id="customer-request"
              />
            </div>
          </div>
          <div>
            <div
              className="
                sticky top-10 flex flex-col items-center w-[100%] pt-4
              "
            >
              <div className="flex flex-row space-x-4 items-center">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="
                    rounded-full bg-green-400 p-2 shadow-sm 
                    hover:cursor-pointer hover:bg-green-500
                  "
                  onClick={() => {
                    if (ordering.quantity == 1) {
                      return;
                    }

                    setOrdering({
                      ...ordering,
                      quantity: ordering.quantity - 1,
                    });
                  }}
                />
                <div>{`x${ordering.quantity}`}</div>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="
                    rounded-full bg-green-400 p-2 shadow-sm 
                    hover:cursor-pointer hover:bg-green-500
                  "
                  onClick={() => {
                    setOrdering({
                      ...ordering,
                      quantity: ordering.quantity + 1,
                    });
                  }}
                />
              </div>
              <div
                className={
                  `rounded-xl bg-gradient-to-r py-2 px-4 mt-6 shadow-lg 
                      w-[75%] text-center flex justify-between ` +
                  (requiredSelected()
                    ? `from-orange-300 to-red-400 hover:cursor-pointer 
                          hover:shadow-xl`
                    : 'from-slate-100 to-gray-300 text-red-700 ')
                }
                onClick={
                  requiredSelected()
                    ? () => {
                        onConfirmation(ordering);
                      }
                    : null
                }
              >
                <div>{confirmationText}</div>
                <div>{`฿${calculatePrice(
                  restaurant,
                  menu_id,
                  ordering.options,
                  ordering.quantity,
                )}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const calculatePrice = (restaurant, menu_id, options, quantity) => {
  let price = new Decimal(restaurant.menus[menu_id].price);

  for (const option_id of options) {
    const option = restaurant.menus[menu_id].options[option_id];

    if (option.extra_price != null) {
      price = new Decimal(option.extra_price).plus(price);
    }
  }

  return price.times(Decimal(quantity));
};

const MainPage = ({ restaurant }) => {
  const [order, setOrder] = useState({
    popup: null,
    orders: [],
  });

  const calculateTotalQuantity = () =>
    order.orders.reduce((acc, order) => acc + order.quantity, 0);

  const calculateTotalPrice = () =>
    order.orders.reduce(
      (acc, order) =>
        acc.plus(
          calculatePrice(
            restaurant,
            order.menu_id,
            order.options,
            order.quantity,
          ),
        ),
      new Decimal(0),
    );

  const Popup = ({ order, setOrder }) => {
    if (order.popup == null) {
      return null;
    }

    console.log(order.popup);

    if (order.popup.type === 'order') {
      return (
        <OrderPopup
          menu_id={order.popup.menu_id}
          restaurant={restaurant}
          onConfirmation={(newOrder) => {
            setOrder({
              popup: null,
              orders: [
                ...order.orders,
                {
                  menu_id: order.popup.menu_id,
                  quantity: newOrder.quantity,
                  options: newOrder.options,
                  request: newOrder.request,
                },
              ],
            });
          }}
          onClose={() => {
            setOrder({
              ...order,
              popup: null,
            });
          }}
          defaultQuantity={1}
          defaultOptions={[]}
          defaultRequest=""
          confirmationText={'Add to Basket'}
        />
      );
    } else if (order.popup.type === 'basket') {
      console.log('rendering basket');
      return (
        <BasketPopup
          orders={order.orders}
          restaurant={restaurant}
          onClose={(orders) =>
            setOrder({
              ...order,
              orders: orders,
              popup: null,
            })
          }
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="mx-auto">
      <img
        src={
          restaurant.image == null
            ? defaultRestaurantImage
            : URL.createObjectURL(restaurant.image)
        }
        className="
            top-0 absolute w-[100%] h-auto max-h-[25vh] object-center 
            object-cover min-h-40 drop-shadow-2xl
        "
      />
      <div
        className="
            bg-slate-50 rounded-xl md:w-fit p-4 mx-4 md:mx-auto md:min-w-[50%] 
            mt-20 drop-shadow-xl
        "
      >
        <div className="flex justify-between pb-4">
          <div className="text-2xl font-semibold h-fit">{restaurant.name}</div>
          <FontAwesomeIcon icon={faLocationDot} className="self-center" />
        </div>
        <hr></hr>
        <div>
          <div className="flex justify-between py-1">
            <div className="text-red-00">Busy</div>
          </div>
          <hr></hr>
          <div className="flex justify-between py-1">
            <div className="mr-2">Current Queue</div>
            <div>32</div>
          </div>
          <hr></hr>
          <div className="flex justify-between py-1">
            <div>Rating and Review</div>
            <div>4.7/5.0</div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div
        className="
          flex flex-col my-10 mx-8 justify-center gap-x-5 gap-y-5 md:flex-row
          md:flex-wrap
        "
      >
        {Object.entries(restaurant.menus).map(([id, menu]) => (
          <div
            className="
            bg-slate-50 rounded-2xl shadow-xl 
            hover:shadow-orange-300 hover:shadow-2xl flex flex-row h-48
              max-h-48 md:flex-col md:h-auto md:max-h-none md:w-64 md:max-w-64
              overflow-hidden
            "
          >
            <img
              src={
                menu.image == null
                  ? defaultMenuImage
                  : URL.createObjectURL(menu.image)
              }
              className="
                aspect-square h-full w-auto p-2 object-cover object-center
                rounded-xl drop-shadow-sm md:p-0 md:rounded-none
              "
            />
            <div className="flex justify-between p-4 grow">
              <div className="flex flex-col">
                <div className="text-xl font-semibold line-clamp-1">
                  {menu.name}
                </div>
                <p className="text-md mt-4 line-clamp-1">{menu.description}</p>
                <div className="text-md mt-4 line-clamp-1">{`฿${menu.price}`}</div>
                <div className="flex gap-x-2 mt-4">
                  <FontAwesomeIcon className="self-center" icon={faClock} />
                  <div className="text line-clamp-1">
                    {menu.estimated_prep_time == null
                      ? 'Not Specified'
                      : `${menu.estimated_prep_time} mins`}
                  </div>
                </div>
              </div>
              <FontAwesomeIcon
                className="
                  rounded-full bg-green-400 p-3 shadow-sm self-end 
                  hover:cursor-pointer  hover:shadow-lg hover:bg-green-500
                "
                icon={faPlus}
                onClick={async () => {
                  setOrder({
                    ...order,
                    popup: {
                      type: 'order',
                      menu_id: id,
                    },
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="
          sticky bottom-5 mx-auto text-center bg-gradient-to-r from-orange-300 
          to-red-400 rounded-xl p-4 z-2 drop-shadow-xl flex min-w-50
          justify-between w-[50%] hover:cursor-pointer hover:shadow-2xl
        "
        onClick={
          calculateTotalQuantity() == 0
            ? null
            : () => {
                console.log('basket');
                setOrder({
                  ...order,
                  popup: {
                    type: 'basket',
                  },
                });
              }
        }
      >
        <div className="flex gap-x-2">
          <FontAwesomeIcon icon={faBasketShopping} className="text-2xl" />
          <div>{`x${calculateTotalQuantity()}`}</div>
        </div>
        <div>
          {calculateTotalQuantity() == 0
            ? 'No Orders'
            : `฿${calculateTotalPrice()}`}
        </div>
      </div>
      <Popup order={order} setOrder={setOrder} />
    </div>
  );
};

const Menu = ({ restaurantID }) => {
  const [restaurant, setRestaurant] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const restaurantData = await getRestaurant(restaurantID);
      const image = await getRestaurantImage(restaurantID);
      const menus = await getRestaurantMenus(restaurantID);

      restaurantData.image = image;
      restaurantData.menus = {};

      if (menus != null) {
        for (const menu of menus) {
          menu.image = await getMenuImage(menu.id);

          const customization = await getMenuCustomizations(menu.id);

          menu.customizations = {};
          menu.options = {};

          for (const c of customization) {
            menu.customizations[c.id] = c;
            for (const o of c.options) {
              menu.options[o.id] = o;
            }
          }

          restaurantData.menus[menu.id] = menu;
        }
      }

      console.log(restaurantData);
      setRestaurant(restaurantData);
    };

    getData();
  }, []);

  return restaurant === undefined ? (
    <LoadingPage opacity={true} />
  ) : (
    <MainPage restaurant={restaurant} />
  );
};

export default Menu;
