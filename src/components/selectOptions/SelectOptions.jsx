import { useDispatch } from 'react-redux';
import { useFetch } from "../../hooks";
import { KITCHEN_TYPES_URL } from "../../urls";
import { selectKitchenType } from '../../store/actions';

import './selectOptions.scss';

const SelectOptions = () => {
    const dispatch = useDispatch()
    
    const kitchenTypes = useFetch(KITCHEN_TYPES_URL)

    const onSelectChange = (e) => {
        dispatch(selectKitchenType(e.target.value))
    }

    return (
        <div className='selectOptions'>
            <select id="kitchens" onChange={(e) => onSelectChange(e)} >
                <option value='all'>All</option>
                {
                    kitchenTypes && kitchenTypes.map((kitchen, i) => {
                        return <option value={kitchen.abbr} key={i}>{kitchen.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectOptions