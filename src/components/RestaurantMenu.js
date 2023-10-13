import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_DETAIL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            RES_MENU_DETAIL + resId
        )

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
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
                            <h4>{item.card.info.name} : ₹{item.card.info.price/100} </h4>
                        )
                    })
                ):
                <h3>Loading menu...</h3>
            }
        </div>
    )
}

export default RestaurantMenu;