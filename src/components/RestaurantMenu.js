import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) {
        return (<h2>Loading.....</h2>);
    }

    const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
        return card?.card?.card?.['@type'].split('.').at(-1).toLowerCase() === "itemcategory"
    })

    return (
        <div className="res-menu">
            <p className="text-center font-bold text-2xl">{name}</p>
            <p className="text-center">{cuisines.join(', ')}</p>
            {
                categories.map((category, index) => (
                    <RestaurantCategory 
                        key={category?.card?.card?.title.replaceAll(' ', '')} 
                        category={category}
                        showItems={index === showIndex}
                        setShowItems={ (otherIndex) => {setShowIndex(otherIndex !== null ? otherIndex : index)}}/>
                ))
            }
        </div>
    )
}

export default RestaurantMenu;