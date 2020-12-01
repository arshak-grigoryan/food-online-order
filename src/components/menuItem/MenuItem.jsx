import './menuItem.scss';

const MenuItem = ({
    id,
    name,
    photoUrl,
    price
}) => {
    return (
        <div className='menuItem'>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <p>Price {price}</p>
        </div>
    )
}

export default MenuItem