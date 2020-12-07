import React from "react";
import { useHistory } from "react-router-dom";
import "./restaurantCard.scss";

const RestaurantCard = ({ id, name, photoUrl, kitchenTypes }) => {
  const history = useHistory();

  const onRestaurantClick = () => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div className="restaurantCardWrapper">
      <div className="restaurantCard" onClick={onRestaurantClick}>
        <div className='photo' style={{backgroundImage: `url(${photoUrl})`}}></div>
        <h2>{name}</h2>
        <div className="kitchenTypes">
          {kitchenTypes.map((kitchen, i) => {
            return (
              <div className="kitchenWrapper" key={i}>
                <div className="kitchen">{kitchen}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
