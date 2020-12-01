import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from "../../hooks";
import { RESTAURANTS_URL } from "../../urls";
import { getRestaurants, getSearchedName, getSelectedKitchenType } from '../../store/selectors';
import { addRestaurants } from "../../store/actions";
import RestaurantCard from '../restaurantCard/RestaurantCard';
import './restaurants.css';

const Restaurants = () => {
    const dispatch = useDispatch()

    const restaurantsData = useFetch(RESTAURANTS_URL)

    const {
        restaurants,
        searchedName,
        selectedKitchenType,
    } = useSelector(
        (state) => ({
            restaurants: getRestaurants(state),
            searchedName: getSearchedName(state),
            selectedKitchenType: getSelectedKitchenType(state),
        })
    )

    useEffect(() => {
        dispatch(addRestaurants(restaurantsData))
    },[dispatch, restaurantsData])

    return (
        <div className='restaurants'>
            {
                restaurants
                .filter(({ kitchenTypes }) => {
                    return (selectedKitchenType === 'all' || kitchenTypes.includes(selectedKitchenType))
                })
                .filter(({ name }) => {
                    const lowercasedName = name.toLowerCase();
                    return lowercasedName.includes(searchedName)
                })
                .map(({ id, ...props }) => {
                    return <RestaurantCard key={id} id={id} {...props}/>
                })
            }
        </div>
    )
}

export default Restaurants