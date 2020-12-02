import { useSelector } from 'react-redux';
import { getBasketVisibility } from '../../../store/selectors';
import Header from '../../header/Header';
import Restaurants from '../../restaurants/Restaurants';
import Basket from '../../basket/Basket';
import './home.scss';

const Home = () => {

    const { basketVisibility } = useSelector((state) => ( { basketVisibility: getBasketVisibility(state) } ))

    return (
        <>
        { basketVisibility && <Basket/> }
        <div className='home'>
            <Header isSelectOptionExist={true} placeholder='Search Restaurants'/>
            <Restaurants/>
        </div>
        </>
    )
}

export default Home