import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ItemList = (props) => {

    const dispatch = useDispatch();
    
    const addItemToCart = (item) => {
        // dispatch addItem action
        dispatch(addItem(item));
    }

    return (
        <div className="dark:bg-black dark:text-white">
            {
                props?.items?.map((item) => (
                    <div 
                        key={item?.card?.info?.id}
                        className="border-gray-200 border-b-2 p-4 flex justify-between">
                            <div>
                                <p className="text-lg">{item?.card?.info?.name}</p>
                                <p className="text-sm text-gray-500">{item?.card?.info?.description}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg">₹{item?.card?.info?.price/100}</p>
                                <button 
                                    className="px-3 py-1 my-2 text-white bg-green-400 rounded-lg text-xs"
                                    onClick={() => {addItemToCart(item)}}>ADD</button>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;