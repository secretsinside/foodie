import { useNavigate } from "react-router-dom";

const ResCard = (props) => {
    const {restaurant} = props;

    const navigate = useNavigate();
    
    const showRestaurantDetails = () => {
        console.log("Clicked card");
        navigate('/restaurants/' + restaurant.info.id)
    }

    return (
        <div className='res-card'  onClick={showRestaurantDetails}>
            <img className='res-image' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + restaurant.info.cloudinaryImageId}/>
            <div className='res-details'>
                <h3>{restaurant.info.name}</h3>
                <h5>{restaurant.info.cuisines.join(', ')}</h5>
                {restaurant.info.avgRating} <br/>
                {restaurant.info.costForTwo}
            </div>
        </div>
    )
}

export default ResCard;