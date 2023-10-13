import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL}/>
            </div>
            <div className='header-menu'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;