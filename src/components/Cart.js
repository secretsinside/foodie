import { useEffect, useState } from "react";

const Cart = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Cart: loaded");
    }, [count]);

    return (
        <div className="cart-container">
            Cart page WIP
        </div>
    )
}

export default Cart;