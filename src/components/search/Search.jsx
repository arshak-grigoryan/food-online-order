import React from "react";
import { addSearchName } from "../../store/actions";
import { useDispatch } from "react-redux";
import "./search.scss";

const Search = ({ placeholder = "search", isRestaurantsSearch = false }) => {
  console.log(isRestaurantsSearch);
  const dispatch = useDispatch();

  const onSearchNameChange = (e) => {
    dispatch(addSearchName(e.target.value));
  };

  return (
    <div
      className={isRestaurantsSearch ? "search restaurantsSearch" : "search"}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearchNameChange(e)}
      />
    </div>
  );
};

export default Search;
