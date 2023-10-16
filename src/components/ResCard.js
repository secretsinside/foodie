import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../utils/ThemeContext";

const ResCard = (props) => {
    const {restaurant} = props;

    const {theme} = useContext(ThemeContext);

    const navigate = useNavigate();
    
    const showRestaurantDetails = () => {
        console.log("Clicked card");
        navigate('/restaurants/' + restaurant.info.id)
    }

    return (
        <div className={`res-card m-4 p-4 w-[250px] bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-800`}  onClick={showRestaurantDetails}>
            <img className='res-image rounded-lg' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + restaurant.info.cloudinaryImageId}/>
            <div className='res-details'>
                <p className="font-bold pt-2 text-lg">{restaurant.info.name}</p>
                <p className="text-sm">{restaurant.info.cuisines.join(', ')}</p>
                <p className="bg-green-600 text-white w-10 text-center rounded-xl">{restaurant.info.avgRating}</p>
                {restaurant.info.costForTwo}
            </div>
        </div>
    )
}

export default ResCard;