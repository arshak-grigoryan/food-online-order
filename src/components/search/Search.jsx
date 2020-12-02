import React from 'react';
import { addSearchName } from "../../store/actions";
import { useDispatch } from 'react-redux';

import './search.css'

const Search = ({ placeholder = 'search' }) => {

    const dispatch = useDispatch()

    const onSearchNameChange = (e) => {
        dispatch(addSearchName(e.target.value))
    }

    return (
        <div className='search'>
            <input type="text" placeholder={placeholder} onChange={(e) => onSearchNameChange(e)}/>
        </div>
    )
}

export default Search 