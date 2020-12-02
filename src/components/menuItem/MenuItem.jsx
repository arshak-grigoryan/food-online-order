import Icon from '../icon/Icon';
import { CLASS_NAMES } from '../../constants';
import { addItemBasket } from '../../store/actions';

import './menuItem.scss';
import { useDispatch } from 'react-redux';

const MenuItem = ({
    id,
    name,
    photoUrl,
    price,
    kitchenType
}) => {
    const dispatch = useDispatch()

    const onAddItemBasletClick = () => {
        dispatch(addItemBasket({id, name, photoUrl, price}))
    }
    
    return (
        <div className='menuItem'>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <p>Price {price}</p>
            <p>Kiitchen {kitchenType}</p>
            <div className='basket' onClick={onAddItemBasletClick}>
                <Icon type={CLASS_NAMES.shoppingCart}/>
            </div>
        </div>
    )
}

export default MenuItem