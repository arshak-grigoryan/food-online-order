import Icon from '../icon/Icon';
import { CLASS_NAMES } from '../../constants';
import './menuItem.scss';

const MenuItem = ({
    name,
    photoUrl,
    price,
    kitchenType
}) => {
    return (
        <div className='menuItem'>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <p>Price {price}</p>
            <p>Kiitchen {kitchenType}</p>
            <div className='basket'>
                <Icon type={CLASS_NAMES.shoppingCart}/>
            </div>
        </div>
    )
}

export default MenuItem