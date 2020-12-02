import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import MenuItem from '../../menuItem/MenuItem';
import './restaurant.scss';

const Restaurant = () => {

    const [menuItems, setMenuItems] = useState([])
    const { id } = useParams()
    const menu = useFetch(`/mock/menus/${id}.json`)

    useEffect(() => {
        if (menu) {
            setMenuItems(menu)
        }
    }, [menu])

    return (
        <div className='restaurant'>
            {
                menuItems.map(({id, ...props}) => {
                    return <MenuItem key={id} {...props}/>
                })
            }
        </div>
    )
}

export default Restaurant