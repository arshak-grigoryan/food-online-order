import { useSelector } from "react-redux";
import { TRANSITION_TIME_MS, CART_WIDTH } from "../../../constants";
import { getIsCart, getisCartAnimating } from "../../../store/selectors";
import Header from "../../header/Header";
import Restaurants from "../../restaurants/Restaurants";
import Cart from "../../cart/Cart";
import "./home.scss";

const Home = () => {
  const { isCart, isCartAnimating } = useSelector((state) => ({
    isCart: getIsCart(state),
    isCartAnimating: getisCartAnimating(state),
  }));

  return (
    <>
      <div
        className="home"
        style={{
          width: isCartAnimating ? `calc(100% - ${CART_WIDTH})` : "100%",
          transition: isCartAnimating ? `${TRANSITION_TIME_MS}ms` : "0",
        }}
      >
        <Header
          isSelectOptionExist={true}
          placeholder="Search Restaurants"
          isRestaurantsSearch={true}
        />
        <Restaurants />
      </div>
      {isCart && <Cart style={{ right: isCartAnimating ? "0" : `-${CART_WIDTH}` }} />}
    </>
  );
};

export default Home;
