import React from "react";
import { useHistory } from "react-router-dom";
import { CLASS_NAMES } from "../../constants";
import SelectOptions from "../selectOptions/SelectOptions";
import Search from "../search/Search";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Icon from "../icon/Icon";
import "./header.scss";

const Header = ({
  isSelectOptionExist = false,
  placeholder,
  isBackExist = false,
  isRestaurantsSearch,
}) => {
  const history = useHistory();

  const onGoBackClick = () => {
    history.push("/");
  };

  return (
    <div className="header">
      <div className="left">
        {isBackExist && (
          <button onClick={onGoBackClick}>
            <Icon type={CLASS_NAMES.arrowLeft} style={{ color: "#2c3e50" }} />
          </button>
        )}
      </div>
      <div className="searchFilter">
        {isSelectOptionExist && <SelectOptions />}
        <Search
          placeholder={placeholder}
          isRestaurantsSearch={isRestaurantsSearch}
        />
      </div>
      <div className="cart">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
