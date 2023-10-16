import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="dark:bg-gray-600 h-screen">
            <div className="w-6/12 m-auto">
                <div className="">
                    <button 
                        className="px-2 py-1 my-4 rounded-xl bg-black text-white dark:bg-white dark:text-black"
                        onClick={handleClearCart}>
                            Clear Cart
                        </button>
                </div>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;