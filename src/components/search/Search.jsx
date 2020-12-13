import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '../../hooks';
import { getSearchedName } from '../../store/selectors';
import { addSearchName } from '../../store/actions';
import './search.scss';

const Search = ({ placeholder = 'search', isRestaurantsSearch = false }) => {
  const dispatch = useDispatch();

  const { searchedName } = useSelector((state) => ({
    searchedName: getSearchedName(state),
  }));

  useMount(() => {
    // reset search value for current page when page visited for first time reloaded
    if (searchedName !== '') {
      dispatch(addSearchName(''));
    }
  });

  const onSearchNameChange = (e) => {
    dispatch(addSearchName(e.target.value));
  };

  return (
    <div className={isRestaurantsSearch ? 'search restaurantsSearch' : 'search'}>
      <input type="text" placeholder={placeholder} onChange={(e) => onSearchNameChange(e)} />
    </div>
  );
};

export default Search;
