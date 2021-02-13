import { useEffect, useState, lazy } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useFetch } from '../../../hooks';
import {
  RESTAURANTS_URL,
  TRANSITION_TIME_MS,
  CART_WIDTH,
} from '../../../constants';
import {
  getSearchedName,
  getIsCart,
  getisCartAnimating,
} from '../../../store/selectors';
import Header from '../../header/Header';
import './restaurant.scss';

const MenuItem = lazy(() => import('../../menuItem/MenuItem'));
const Cart = lazy(() => import('../../cart/Cart'));

const Restaurant = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(999999999);
  const [selectedCuisines, setSelectedCuisines] = useState();
  const [currentRestaurant, setCurrentRestaurant] = useState();
  const [menuItems, setMenuItems] = useState();
  const params = useParams();
  const menu = useFetch(
    `${process.env.PUBLIC_URL}/mock/menus/${params.id}.json`
  );
  const restaurants = useFetch(RESTAURANTS_URL);

  const { searchedName, isCart, isCartAnimating } = useSelector((state) => ({
    searchedName: getSearchedName(state),
    isCart: getIsCart(state),
    isCartAnimating: getisCartAnimating(state),
  }));

  useEffect(() => {
    if (restaurants && menu) {
      setMenuItems(menu);
      const selectedRestaurant = restaurants.find(
        (restaurant) => restaurant.id === Number(params.id)
      );
      if (selectedRestaurant) {
        setCurrentRestaurant(selectedRestaurant);
        if (!selectedCuisines) {
          setSelectedCuisines(selectedRestaurant.cuisines);
        }
      }
    }
  }, [restaurants, params, menu, selectedCuisines]);

  useEffect(() => () => setMenuItems(menu), [menu]);

  const onCheckboxChoose = (e) => {
    const chechked = e.target.checked;
    const { value } = e.target;
    if (selectedCuisines.includes(value) && chechked) {
      setSelectedCuisines([value]);
    } else if (selectedCuisines.includes(value) && chechked === false) {
      setSelectedCuisines((prevTypes) =>
        prevTypes.filter((type) => type !== value)
      );
    } else if (!selectedCuisines.includes(value) && chechked) {
      setSelectedCuisines((prevTypes) => [...prevTypes, value]);
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

  // console.log(isCartAnimating ? `calc(100% - ${CART_WIDTH})` : '100%');

  return (
    <>
      {isCart && (
        <Cart
          style={{
            right: isCartAnimating ? '0' : `-${CART_WIDTH}`,
          }}
        />
      )}
      <div
        className="restaurant"
        style={{
          width: isCartAnimating ? `calc(100% - ${CART_WIDTH})` : '100%',
          transition: isCartAnimating ? `${TRANSITION_TIME_MS}ms` : '0',
        }}
      >
        <Header placeholder="Search Menu Items" isBackExist={true} />
        <div className="menuWrapper">
          <div className="menuFilterWrapper">
            <div className="menuFilter">
              <div className="cuisine">
                <h2>Cuisine</h2>
                <form className="chechkboxItemsWrapper">
                  {currentRestaurant &&
                    currentRestaurant.cuisines.map((kitchen, i) => (
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
                    ))}
                </form>
              </div>
              <div className="price">
                <h2>Price</h2>
                <div className="inputsWrapper">
                  <form className="priceInput">
                    <label htmlFor="min">Min $</label>
                    <input
                      id="min"
                      type="number"
                      value={minValue === 0 ? '' : minValue}
                      onChange={(e) => onMinValueChange(e)}
                    />
                  </form>
                  <form className="priceInput">
                    <label htmlFor="max">Max $</label>
                    <input
                      id="max"
                      type="number"
                      value={maxValue === 999999999 ? '' : maxValue}
                      onChange={(e) => onMaxValueChange(e)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="restaurantMenu">
            {menuItems &&
              menuItems
                .filter(({ name }) => name.toLowerCase().includes(searchedName))
                .filter(({ cuisine }) => {
                  if (selectedCuisines) {
                    if (selectedCuisines.length) {
                      return selectedCuisines.includes(cuisine);
                    }
                    return true;
                  }
                  return true;
                })
                .filter(({ price }) => price >= minValue && price <= maxValue)
                .map(({ id, name, ...props }) => (
                  <MenuItem
                    key={id}
                    ruiid={params.id + name + id}
                    id={id}
                    name={name}
                    {...props}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
