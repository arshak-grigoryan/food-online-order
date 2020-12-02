import { useDispatch } from 'react-redux';
import { closeBasket } from "../../store/actions";
import { CLASS_NAMES } from '../../constants';
import Icon from '../icon/Icon';
import './basket.scss';

const Basket = () => {
    const dispatch = useDispatch()

    const onCloseBasketClick = () => {
        dispatch(closeBasket())
    }

    return (    
        <div className='basketRight'>
            <div className='top'>
                <div className='left'></div>
                <div className='totalPrice'>
                    {/* <h3>Total {totalPrice}</h3> */}
                </div>
                <div className='closeBasket'onClick={onCloseBasketClick}>
                    <Icon type={CLASS_NAMES.close}/>
                </div>
            </div>
        </div>
    )
}

export default Basket 