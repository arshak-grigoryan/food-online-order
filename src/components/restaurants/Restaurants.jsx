import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch, useMount } from "../../hooks";
import { RESTAURANTS_URL } from "../../constants";
import {
    getBasketVisibility,
  getRestaurants,
  getSearchedName,
  getSelectedKitchenType,
} from "../../store/selectors";
import { addRestaurants, addSearchName, closeBasket } from "../../store/actions";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import "./restaurants.scss";

const Restaurants = () => {
  const dispatch = useDispatch();

  const restaurantsData = useFetch(RESTAURANTS_URL);

  const { restaurants, searchedName, selectedKitchenType, basketVisibility } = useSelector(
    (state) => ({
      restaurants: getRestaurants(state),
      searchedName: getSearchedName(state),
      selectedKitchenType: getSelectedKitchenType(state),
      basketVisibility: getBasketVisibility(state)
    })
  );

  useMount(() => {
    // reset search value for current page when page visited for first time reloaded
    dispatch(addSearchName(""));
  });

  useEffect(() => {
    if (!restaurants.length) {
      dispatch(addRestaurants(restaurantsData));
    }
  }, [dispatch, restaurantsData, restaurants]);

  useEffect(() => {
    return () => {
        if(basketVisibility) {
            dispatch(closeBasket())
        }
    }
  },[dispatch, basketVisibility])

  return (
    <div className="restaurants">
      {restaurants
        .filter(({ kitchenTypes }) => {
          return (
            selectedKitchenType === "all" ||
            kitchenTypes.includes(selectedKitchenType)
          );
        })
        .filter(({ name }) => {
          return name.toLowerCase().includes(searchedName);
        })
        .map(({ id, ...props }) => {
          return <RestaurantCard key={id} id={id} {...props} />;
        })}
    </div>
  );
};

export default Restaurants;
