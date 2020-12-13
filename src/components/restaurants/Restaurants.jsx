import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks';
import { RESTAURANTS_URL } from '../../constants';
import {
  getRestaurants,
  getSearchedName,
  getSelectedCuisine,
} from '../../store/selectors';
import { addRestaurants } from '../../store/actions';
import RestaurantItem from '../restaurantItem/RestaurantItem';
import './restaurants.scss';

const Restaurants = () => {
  const dispatch = useDispatch();

  const restaurantsData = useFetch(RESTAURANTS_URL);

  const { restaurants, searchedName, selectedCuisine } = useSelector(
    (state) => ({
      restaurants: getRestaurants(state),
      searchedName: getSearchedName(state),
      selectedCuisine: getSelectedCuisine(state),
    })
  );

  useEffect(() => {
    if (!restaurants.length) {
      if (restaurantsData) {
        dispatch(addRestaurants(restaurantsData));
      }
    }
  }, [dispatch, restaurantsData, restaurants]);

  return (
    <div className="restaurants">
      {restaurants
        .filter(
          ({ cuisines }) =>
            selectedCuisine === 'all' || cuisines.includes(selectedCuisine)
        )
        .filter(({ name }) => name.toLowerCase().includes(searchedName))
        .map(({ id, ...props }) => (
          <RestaurantItem key={id} id={id} {...props} />
        ))}
    </div>
  );
};

export default Restaurants;
