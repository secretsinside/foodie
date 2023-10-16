import { Link } from "react-router-dom";
import { LOGO_URL, THEME } from "../utils/constants";
import useTheme from "../utils/ThemeContext";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";

const Header = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    }

    return (
        <div className={`header flex  justify-between shadow-lg m-5 ${theme}` }>
            <div className='logo w-40'>
                <img src={LOGO_URL}/>
            </div>
            <div className='header-menu flex items-center dark:bg-black dark:text-white'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <button onClick={toggleTheme}>{theme.toString()}</button>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header;