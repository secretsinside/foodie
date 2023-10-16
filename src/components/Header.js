import { Link } from "react-router-dom";
import { LOGO_URL, THEME } from "../utils/constants";
import useTheme from "../utils/ThemeContext";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const cartItems = useSelector((store) => store.cart.items);

    const toggleTheme = () => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    }

    return (
        <div className={`header flex  justify-between shadow-lg p-5 ${theme} dark:bg-black` }>
            <div className='logo w-40'>
                <img
                    className="dark:invert" 
                    src={LOGO_URL}/>
            </div>
            <div className='header-menu flex items-center dark:bg-black dark:text-white'>
                <ul className="flex p-4 m-4 align-middle">
                    <li className="px-2 py-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                    <li className="px-4">
                        <button 
                            onClick={toggleTheme}
                            className="px-2 py-1 rounded-xl font-bold bg-black text-white dark:bg-white dark:text-black">{theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT}</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header;