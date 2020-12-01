import { useEffect } from 'react';
import { useFetch } from "../../hooks";
import { KITCHEN_TYPES_URL } from "../../urls";
import './selectOptions.scss';

const SelectOptions = () => {
    const kitchenTypes = useFetch(KITCHEN_TYPES_URL)
    
    useEffect(() => {
        console.log(kitchenTypes)
    },[kitchenTypes])

    return (
        <div className='selectOptions'>
            <select name="" id="kitchens" >
                <option value="all">All</option>
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