import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeBasket, order } from "../../store/actions";
import { getBasket } from '../../store/selectors';
import { CLASS_NAMES } from '../../constants';
import Icon from '../icon/Icon';
import BasketItem from '../basketItem/BasketItem';
import './basket.scss';

const Basket = () => {
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()
    const { basket } = useSelector((state) => ({ basket: getBasket(state) }))

    const onCloseBasketClick = () => {
        dispatch(closeBasket())
    }

    useEffect(() => {
        if(basket) {
            let total = 0;
            basket.forEach(({price, count}) => {
                total += price * count
            });
            setTotalPrice(total)
        }
    },[basket])

    const onOrderItems = () => {
        dispatch(order())
        console.log('ordered')
    }

    return (    
        <div className='basketRight'>
            <div className='top'>
                <div className='left'></div>
                <div className='totalPrice'>
                    <h3>{ totalPrice ? `Total ${totalPrice}` : 'Baskes is Empty'}</h3>
                </div>
                <div className='closeBasket'onClick={onCloseBasketClick}>
                    <Icon type={CLASS_NAMES.close}/>
                </div>
            </div>
            <div className='basketItems'>
                {
                    basket && basket.map(({ruiid, ...item}) => {
                        return <BasketItem key={ruiid} ruiid={ruiid} {...item}/>
                    })
                }
            </div>
            {
                totalPrice ?
                <div className='order'>
                    <button onClick={onOrderItems}>Order</button>
                </div>
                :
                null
            }
        </div>
    )
}

export default Basket 