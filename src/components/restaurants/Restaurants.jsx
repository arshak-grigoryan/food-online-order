import { useEffect, useState } from 'react';
import { useFetch } from "../../hooks";
import { RESTAURANTS_URL } from "../../urls";
import { getRestaurants, getSearchedName } from '../../store/selectors';
import { addRestaurants } from "../../store/actions";
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import './restaurants.css';

const Restaurants = () => {
    const dispatch = useDispatch()

    const restaurantsData = useFetch(RESTAURANTS_URL)

    const { restaurants, searchedName } = useSelector((state) => ({
        restaurants: getRestaurants(state),
        searchedName: getSearchedName(state),
    }))

    useEffect(() => {
        console.log(restaurantsData)
        dispatch(addRestaurants(restaurantsData))
    },[restaurantsData])

    return (
        <div className='restaurants'>
            {
                restaurants.map(({id, name, ...restaurant}, i) => {
                    const lowercasedName = name.toLowerCase()
                    if(lowercasedName.includes(searchedName)) {
                        return <RestaurantCard key={id} id={id} name={name} {...restaurant}/>
                    }
                })
            }
        </div>
    )
}

export default Restaurants