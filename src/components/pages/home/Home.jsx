import { useDispatch, useSelector } from "react-redux";
import {
  getBasketVisibility,
  getIsBasketAnimation,
} from "../../../store/selectors";
import { animateBasket } from "../../../store/actions";
import Header from "../../header/Header";
import Restaurants from "../../restaurants/Restaurants";
import Basket from "../../basket/Basket";
import "./home.scss";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { basketVisibility, isBasketAnimation } = useSelector((state) => ({
    basketVisibility: getBasketVisibility(state),
    isBasketAnimation: getIsBasketAnimation(state),
  }));

  useEffect(() => {
    if (basketVisibility) {
      setTimeout(() => dispatch(animateBasket()));
    }
  }, [basketVisibility, dispatch]);

  return (
    <>
      <div
        className="home"
        style={{ width: isBasketAnimation ? "calc(100% - 300px)" : "100%" }}
      >
        <Header
          isSelectOptionExist={true}
          placeholder="Search Restaurants"
          isRestaurantsSearch={true}
        />
        <Restaurants />
      </div>
      {basketVisibility && (
        <Basket style={{ right: isBasketAnimation ? "0" : "-300px" }} />
      )}
    </>
  );
};

export default Home;
