import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetch, useMount } from "../../../hooks";
import { RESTAURANTS_URL } from "../../../constants";
import {
  addSearchName,
  animateBasket,
  closeBasket,
} from "../../../store/actions";
import {
  getSearchedName,
  getBasketVisibility,
  getIsBasketAnimation,
} from "../../../store/selectors";
import MenuItem from "../../menuItem/MenuItem";
import Header from "../../header/Header";
import Basket from "../../basket/Basket";
import "./restaurant.scss";

const Restaurant = () => {
  const [minValue, setMinValue] = useState(undefined);
  const [maxValue, setMaxValue] = useState(undefined);
  const [selectedKitchenTypes, setSelectedKitchenTypes] = useState(null);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([]);
  const params = useParams();
  const menu = useFetch(`/mock/menus/${params.id}.json`);
  const restaurants = useFetch(RESTAURANTS_URL);

  const { searchedName, basketVisibility, isBasketAnimation } = useSelector(
    (state) => ({
      searchedName: getSearchedName(state),
      basketVisibility: getBasketVisibility(state),
      isBasketAnimation: getIsBasketAnimation(state),
    })
  );

  useMount(() => {
    // reset search value for current page when page visited for first time reloaded
    dispatch(addSearchName(""));
  });

  useEffect(() => {
    if (menu) {
      setMenuItems(menu);
    }
  }, [menu]);

  useEffect(() => {
    if (restaurants) {
      const currentRestaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(params.id)
      );
      if (currentRestaurant) {
        setCurrentRestaurant(currentRestaurant);
        setSelectedKitchenTypes(currentRestaurant.kitchenTypes);
      }
    }
  }, [restaurants, params]);

  useEffect(() => {
    if (basketVisibility) {
      console.log(basketVisibility);
      setTimeout(() => dispatch(animateBasket()));
    }
  }, [basketVisibility, dispatch]);

  useEffect(() => {
    return () => {
      if (basketVisibility) {
        console.log(basketVisibility);
        dispatch(closeBasket());
      }
    };
  }, [dispatch, basketVisibility]);

  const onCheckboxChoose = (e) => {
    const chechked = e.target.checked;
    const value = e.target.value;
    if (selectedKitchenTypes.includes(value) && chechked) {
      setSelectedKitchenTypes([value]);
    } else if (selectedKitchenTypes.includes(value) && chechked === false) {
      setSelectedKitchenTypes((prevTypes) => {
        return prevTypes.filter((type) => type !== value);
      });
    } else if (!selectedKitchenTypes.includes(value) && chechked) {
      setSelectedKitchenTypes((prevTypes) => {
        return [...prevTypes, value];
      });
    } else {
      setSelectedKitchenTypes((prevTypes) => prevTypes);
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
      {basketVisibility && (
        <Basket style={{ right: isBasketAnimation ? "0" : "-300px" }} />
      )}
      <div
        className="restaurant"
        style={{ width: isBasketAnimation ? "calc(100% - 300px)" : "100%" }}
      >
        <Header placeholder="Search Menu Items" isBackExist={true} />
        <div className="menuWrapper">
          <div className="menuFilterWrapper">
            <div className="menuFilter">
              <div className="kitchenTypes">
                <h2>Kitchen Types</h2>
                <div className="chechkboxItemsWrapper">
                  {currentRestaurant &&
                    currentRestaurant.kitchenTypes.map((kitchen, i) => {
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
                    <label htmlFor="min">Min</label>
                    <input
                      id="min"
                      type="number"
                      value={minValue}
                      onChange={(e) => onMinValueChange(e)}
                    />
                  </div>
                  <div className="priceInput">
                    <label htmlFor="min">Max</label>
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
            {menuItems
              .filter(({ name }) => {
                return name.toLowerCase().includes(searchedName);
              })
              .filter(({ kitchenType }) => {
                if (selectedKitchenTypes) {
                  if (selectedKitchenTypes.length) {
                    return selectedKitchenTypes.includes(kitchenType);
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
