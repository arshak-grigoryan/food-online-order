import React from 'react';
import { useHistory } from 'react-router-dom';
import './restaurantItem.scss';

const RestaurantItem = ({ id, name, photoUrl, cuisines }) => {
  const history = useHistory();

  const onRestaurantClick = () => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div className="restaurantItemWrapper">
      <div className="restaurantItem" onClick={onRestaurantClick}>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${photoUrl})`,
          }}
        ></div>
        <h2>{name}</h2>
        <div className="cuisines">
          {cuisines.map((kitchen, i) => (
            <div className="cuisineWrapper" key={i}>
              <div className="cuisine">{kitchen}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
