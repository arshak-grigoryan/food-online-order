import React from 'react';
import { useHistory } from 'react-router-dom';
import './restaurantCard.scss';

const RestaurantCard = ({
    id,
    name,
    photoUrl,
    kitchenTypes
}) => {
    const history = useHistory()
    
    const onRestaurantClick = () => {
        history.push(`/restaurants/${id}`)
    }

    return (
        <div className='restaurantCard' onClick={onRestaurantClick}>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <div className='kitchens'>
                <h3>Kitchens</h3>
                <div className='kitchenTypes'>
                    {
                        kitchenTypes.map((kitchen, i) => {
                            return <p key={i}>{kitchen}</p>
                        })
                    }                    
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard