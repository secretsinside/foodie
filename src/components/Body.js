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
        const restaurantList = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
            <div className="body-top">
                <div className='search-container'>
                    <input className='search-bar' type='text'/>
                    <input className='search-btn' type='submit' onClick={
                        () => {
                            const queryString = document.getElementsByClassName('search-bar')[0].value;
                            setFilteredList(
                                resList.filter(res => res.info.name.toString().toLowerCase().includes(queryString.toLowerCase()))
                            )
                        }
                    }/>
                </div>
                <div className='filter'>
                    <button 
                        className="filter-btn" 
                        onClick={() => {
                            setFilteredList(
                                resList.filter(res => res.info.avgRating > 4)
                                )
                            }}>
                        Top rated restaurants
                    </button>
                </div>
            </div>
            <div className='res-card-container'>
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