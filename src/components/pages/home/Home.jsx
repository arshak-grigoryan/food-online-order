import Header from '../../header/Header';
import Restaurants from '../../restaurants/Restaurants';
import './home.scss';

const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <Restaurants/>
        </div>
    )
}

export default Home