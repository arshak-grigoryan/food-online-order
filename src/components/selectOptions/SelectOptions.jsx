import { useDispatch, useSelector } from 'react-redux';

import { useFetch, useMount } from '../../hooks';
import { CUISINES_URL } from '../../constants';
import { selectCusine } from '../../store/actions';
import { getSelectedCuisine } from '../../store/selectors';
import './selectOptions.scss';

const SelectOptions = () => {
  const dispatch = useDispatch();

  const cuisines = useFetch(CUISINES_URL);

  const { selectedCuisine } = useSelector((state) => ({
    selectCusine: getSelectedCuisine(state),
  }));

  const onSelectChange = (e) => {
    dispatch(selectCusine(e.target.value));
  };

  useMount(() => {
    // reset selected option for current page when page visited for first time or reloaded
    if (selectedCuisine !== 'all') {
      dispatch(selectCusine('all'));
    }
  });

  return (
    <div className="selectOptions">
      <select onChange={(e) => onSelectChange(e)}>
        <option value="all">All</option>
        {cuisines &&
          cuisines.map((cuisine, i) => (
            <option value={cuisine.abbr} key={i}>
              {cuisine.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectOptions;
