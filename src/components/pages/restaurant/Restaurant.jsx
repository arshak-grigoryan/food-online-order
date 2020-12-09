import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import {
  RESTAURANTS_URL,
  TRANSITION_TIME_MS,
  CART_WIDTH,
} from "../../../constants";
import {
  getSearchedName,
  getIsCart,
  getisCartAnimating,
} from "../../../store/selectors";
import MenuItem from "../../menuItem/MenuItem";
import Header from "../../header/Header";
import Cart from "../../cart/Cart";
import "./restaurant.scss";

const Restaurant = () => {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [selectedCuisines, setSelectedCuisines] = useState();
  const [currentRestaurant, setCurrentRestaurant] = useState();
  const [menuItems, setMenuItems] = useState();
  const params = useParams();
  const menu = useFetch(`/mock/menus/${params.id}.json`);
  const restaurants = useFetch(RESTAURANTS_URL);

  const { searchedName, isCart, isCartAnimating } = useSelector((state) => ({
    searchedName: getSearchedName(state),
    isCart: getIsCart(state),
    isCartAnimating: getisCartAnimating(state),
  }));

  useEffect(() => {
    if (restaurants && menu) {
      setMenuItems(menu);
      const currentRestaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(params.id)
      );
      if (currentRestaurant) {
        setCurrentRestaurant(currentRestaurant);
        setSelectedCuisines(currentRestaurant.cuisines);
      }
    }
  }, [restaurants, params, menu]);

  useEffect(() => {
    return () => setMenuItems(menu);
  }, [menu]);

  const onCheckboxChoose = (e) => {
    const chechked = e.target.checked;
    const value = e.target.value;
    if (selectedCuisines.includes(value) && chechked) {
      setSelectedCuisines([value]);
    } else if (selectedCuisines.includes(value) && chechked === false) {
      setSelectedCuisines((prevTypes) => {
        return prevTypes.filter((type) => type !== value);
      });
    } else if (!selectedCuisines.includes(value) && chechked) {
      setSelectedCuisines((prevTypes) => {
        return [...prevTypes, value];
      });
    } else {
      setSelectedCuisines((prevTypes) => prevTypes);
    }
  };

  const onMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const onMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  return (
    <>
      {isCart && (
        <Cart style={{ right: isCartAnimating ? "0" : `-${CART_WIDTH}` }} />
      )}
      <div
        className="restaurant"
        style={{
          width: isCartAnimating ? `calc(100% - ${CART_WIDTH})` : "100%",
          transition: isCartAnimating ? `${TRANSITION_TIME_MS}ms` : "0",
        }}
      >
        <Header placeholder="Search Menu Items" isBackExist={true} />
        <div className="menuWrapper">
          <div className="menuFilterWrapper">
            <div className="menuFilter">
              <div className="cuisine">
                <h2>Cuisine</h2>
                <div className="chechkboxItemsWrapper">
                  {currentRestaurant &&
                    currentRestaurant.cuisines.map((kitchen, i) => {
                      return (
                        <div className="chechkboxItem" key={i}>
                          <input
                            type="checkbox"
                            id={kitchen}
                            name={kitchen}
                            value={kitchen}
                            onChange={(e) => onCheckboxChoose(e)}
                          />
                          <label htmlFor={kitchen}>{kitchen}</label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="price">
                <h2>Price</h2>
                <div className="inputsWrapper">
                  <div className="priceInput">
                    <label htmlFor="min">Min $</label>
                    <input
                      id="min"
                      type="number"
                      value={minValue}
                      onChange={(e) => onMinValueChange(e)}
                    />
                  </div>
                  <div className="priceInput">
                    <label htmlFor="min">Max $</label>
                    <input
                      id="max"
                      type="number"
                      value={maxValue}
                      onChange={(e) => onMaxValueChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="restaurantMenu">
            {menuItems &&
              menuItems
                .filter(({ name }) => {
                  return name.toLowerCase().includes(searchedName);
                })
                .filter(({ cuisine }) => {
                  if (selectedCuisines) {
                    if (selectedCuisines.length) {
                      return selectedCuisines.includes(cuisine);
                    }
                    return true;
                  } else {
                    return true;
                  }
                })
                .filter(({ price }) => {
                  return (
                    price >= (minValue ? minValue : 0) &&
                    price <= (maxValue ? maxValue : 999999999)
                  );
                })
                .map(({ id, name, ...props }) => {
                  return (
                    <MenuItem
                      key={id}
                      ruiid={params.id + name + id}
                      id={id}
                      name={name}
                      {...props}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
