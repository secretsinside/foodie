import { Link } from "react-router-dom";
import { LOGO_URL, THEME } from "../utils/constants";
import useTheme from "../utils/ThemeContext";

const Header = () => {

    return (
        <div className={`header flex  justify-between shadow-lg m-5`}>
            <div className='logo w-40'>
                <img src={LOGO_URL}/>
            </div>
            <div className='header-menu flex items-center'>
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

                </ul>
            </div>
        </div>
    )
}

export default Header;