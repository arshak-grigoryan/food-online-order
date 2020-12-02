import { useDispatch } from 'react-redux';
import { CLASS_NAMES } from '../../constants';
import { deleteItemBasket } from "../../store/actions";
import Icon from '../icon/Icon';
import './basketItem.scss';

const BasketItem = ({
    id,
    name,
    photoUrl,
    price,
    count,
    ruiid
}) => {
    const dispatch = useDispatch()

    const onBasketItemDeleteClick = () => {
        dispatch(deleteItemBasket(ruiid))
    }

    return (
        <div className='basketItem'>
            <div className='nameDeleteItem'>
                <div className='name'>
                    <h3>{name}</h3>
                </div>
                <div className='deleteItem' onClick={onBasketItemDeleteClick}>
                    <Icon type={CLASS_NAMES.close}/>
                </div>                
            </div>
            <div className='wrapper'>
                <div className='photo'>
                    <img src={photoUrl} alt="img"/>
                </div>
                <div className='priceCounter'>
                    <div className='price'>
                        <h3>{price}</h3>
                    </div>
                    <div className='counter'>
                        <div className='decrease'>
                            <p>-</p>
                        </div>
                        <div className='currentCount'>
                            <p>{count}</p>
                        </div>
                        <div className='increase'>
                            <p>+</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default BasketItem