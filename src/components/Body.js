import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { FETCH_RES_DETAIL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    
    const fetchData = async () => {
        const data = await fetch(FETCH_RES_DETAIL);
        
        const jsonData = await data.json();
        
        console.log("fetching again");
        let indexOfRestaurants = 0;
        for(card of jsonData.data.cards) {
            if(card?.card?.card?.id === "restaurant_grid_listing") {
                break;
            }
            indexOfRestaurants++;
        }
        const restaurantList = jsonData?.data?.cards[indexOfRestaurants]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(restaurantList);
        setFilteredList(restaurantList);
    }
    
    useEffect(() => {
        console.log("use effect called again");
        fetchData()
    }, []);

    if(resList.length === 0) {
        console.log("Body is empty");
        return <Shimmer/>;
    }

    return (
        <div className='body'>
            <div className="body-top flex">
                <div className='search-container m-4 p-4'>
                    <input className='search-bar border border-solid border-black p-3' type='text'/>
                    <button className='search-btn bg-gray-100 px-4 rounded-lg mx-4' type='submit' onClick={
                        () => {
                            const queryString = document.getElementsByClassName('search-bar')[0].value;
                            setFilteredList(
                                resList.filter(res => res.info.name.toString().toLowerCase().includes(queryString.toLowerCase()))
                            )
                        }
                    }>Search</button>
                </div>
                <div className='filter m-4 p-4'>
                    <button 
                        className="filter bg-gray-100 px-4 rounded-lg mx-4" 
                        onClick={() => {
                            setFilteredList(
                                resList.filter(res => res.info.avgRating > 4)
                                )
                            }}>
                        Top rated restaurants
                    </button>
                </div>
            </div>
            <div className='res-card-container flex flex-wrap'>
                {
                    filteredList.map((restaurant) => (
                        <ResCard key={restaurant.info.id} restaurant={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;