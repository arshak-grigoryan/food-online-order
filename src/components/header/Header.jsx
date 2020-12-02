import React from 'react';
import { useHistory } from 'react-router-dom';
import SelectOptions from '../selectOptions/SelectOptions';
import Search from '../search/Search';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import './header.scss';

const Header = ({isSelectOptionExist=false, placeholder='search', isBackExist=false}) => {

    const history = useHistory()

    const onGoBackClick = () => {
        history.push('/')
    }

    return (
        <div className='header'>
            <div className='left'>
                { isBackExist && <button onClick={onGoBackClick}>Go Back</button> }
            </div>
            <div className='searchFilter'>
                { isSelectOptionExist && <SelectOptions/> }
                <Search placeholder={placeholder}/>                
            </div>
            <div className='cart'>
                <ShoppingCart/>                   
            </div>
        </div>
    )
}

export default Header