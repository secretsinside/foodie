import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) {
        return (<h2>Loading.....</h2>);
    }

    const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const items = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            {
                items?.length > 0 ? 
                (
                    items.map((item) => {
                        return (
                            <h4 key={item.card.info.id}>{item.card.info.name} : ₹{item.card.info.price/100} </h4>
                        )
                    })
                ):
                <h3>Loading menu...</h3>
            }
        </div>
    )
}

export default RestaurantMenu;