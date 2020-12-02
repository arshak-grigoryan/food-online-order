import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetch, useMount } from '../../../hooks';
import { RESTAURANTS_URL } from "../../../urls";
import { addSearchName } from '../../../store/actions';
import { getSearchedName } from '../../../store/selectors';
import MenuItem from '../../menuItem/MenuItem';
import Search from '../../search/Search';
import './restaurant.scss';

const Restaurant = () => {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(Infinity)
    const [selectedKitchenTypes, setSelectedKitchenTypes] = useState(null)
    const [currentRestaurant, setCurrentRestaurant] = useState(null)
    const dispatch = useDispatch()
    const [menuItems, setMenuItems] = useState([])
    const { id } = useParams()
    const menu = useFetch(`/mock/menus/${id}.json`)
    const restaurants = useFetch(RESTAURANTS_URL)

    const { searchedName } = useSelector((state) => ( { searchedName: getSearchedName(state) } ))

    useMount(() => {
        // reset search value for current page when page visited for first time reloaded
        dispatch(addSearchName(''))
    })

    useEffect(() => {
        if (menu) {
            setMenuItems(menu)
        }
    }, [menu])

    useEffect(() => {
        if(restaurants) {
            const currentRestaurant = restaurants.find((restaurant) => restaurant.id === Number(id))
            if(currentRestaurant) {
                setCurrentRestaurant(currentRestaurant)
                setSelectedKitchenTypes(currentRestaurant.kitchenTypes)
            }
        }
    }, [restaurants, id])

    const onCheckboxChoose = (e) => {
        const chechked = e.target.checked
        const value = e.target.value
        if(selectedKitchenTypes.includes(value) && chechked) {
            setSelectedKitchenTypes([value])
        }
        else if(selectedKitchenTypes.includes(value) && chechked === false) {
            setSelectedKitchenTypes((prevTypes) => {
                return prevTypes.filter((type) => type !== value)
            })
        }        
        else if(!selectedKitchenTypes.includes(value) && chechked) {
            setSelectedKitchenTypes((prevTypes) => {
                return [...prevTypes, value]
            })
        }
        else {
            setSelectedKitchenTypes((prevTypes) => prevTypes)
        }
    }

    const onMinValueChange = (e) => {
        setMinValue(e.target.value)
    }

    const onMaxValueChange = (e) => {
        setMaxValue(e.target.value)
    }

    return (
        <div className='restaurant'>
            <Search placeholder='Search Menu Items'/>
            <div className='menuWrapper'>
                <div className='menuFilter'>
                    <div className='kitchenTypes'>
                        <h2>Kitchen Types</h2>
                        {
                            currentRestaurant && currentRestaurant.kitchenTypes.map((kitchen, i) => {
                                return (
                                    <div className='chechkboxItem' key={i}>
                                        <input type="checkbox" id={kitchen} name={kitchen} value={kitchen} onChange={(e) => onCheckboxChoose(e)}/>
                                        <label htmlFor={kitchen}>{kitchen}</label>
                                    </div>
                                )
                            })
                        }                        
                    </div>
                    <div className='value'>
                        <h2>Value</h2>
                        <div className='inputs'>
                            <div className='filterInput'>
                                <label htmlFor="min">Min</label>
                                <input id='min' type="number" value={minValue} onChange={(e) => onMinValueChange(e)}/>                                
                            </div>
                            <div className='filterInput'>
                                <label htmlFor="min">Max</label>
                                <input id='max' type="number" value={maxValue} onChange={(e) => onMaxValueChange(e)}/>                                 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='restaurantMenu'>
                    {
                        menuItems
                            .filter(({ name }) => {
                                return name.toLowerCase().includes(searchedName)
                            })
                            .filter(({ kitchenType }) => {
                                if(selectedKitchenTypes) {
                                    if(selectedKitchenTypes.length) {
                                        return selectedKitchenTypes.includes(kitchenType)
                                    }
                                    return true
                                } else {
                                    return true
                                }
                            })
                            .filter(({ price }) => {
                                return price >= minValue && price <= maxValue
                            })
                            .map(({ id, ...props }) => {
                                return <MenuItem key={id} {...props}/>
                            })
                    }
                </div>                   
            </div>
         
        </div>

    )
}

export default Restaurant