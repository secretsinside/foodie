import { useEffect, useState } from "react"
import { RES_MENU_DETAIL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ resInfo, setResInfo ] = useState(null);

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

    return resInfo;
}

export default useRestaurantMenu;