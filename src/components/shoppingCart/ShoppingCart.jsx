import Icon from '../icon/Icon';
import { CLASS_NAMES } from '../../constants'

import './shoppingCart.scss';

const ShoppingCart = () => {


    return (
        <div className='shoppingCart'>
            <Icon type={CLASS_NAMES.shoppingCart}/>
        </div>
    )
}

export default ShoppingCart