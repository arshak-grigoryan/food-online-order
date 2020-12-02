import React from 'react';
import SelectOptions from '../selectOptions/SelectOptions';
import Search from '../search/Search';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import './header.scss';

const Header = () => {

    return (
        <div className='header'>
            <div className='left'></div>
            <div className='searchFilter'>
                <SelectOptions/>
                <Search placeholder='Search Restaurants'/>                
            </div>
            <div className='cart'>
                <ShoppingCart/>                   
            </div>
        </div>
    )
}

export default Header