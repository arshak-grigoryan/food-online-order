import './menuItem.scss';

const MenuItem = ({
    name,
    photoUrl,
    price,
    kitchenType
}) => {
    return (
        <div className='menuItem'>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <p>Price {price}</p>
            <p>Kiitchen {kitchenType}</p>
        </div>
    )
}

export default MenuItem