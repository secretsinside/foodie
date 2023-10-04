import ReactDom from 'react-dom/client';
import { Restaurants } from './restaurants';

const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg'/>
            </div>
            <div className='header-menu'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestraCardComponent = (props) => {
    const {restaurant} = props;
    return (
        <div className='res-card'>
            <img className='res-image' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + restaurant.info.cloudinaryImageId}/>
            <div className='res-details'>
                <h3>{restaurant.info.name}</h3>
                <h5>{restaurant.info.cuisines.join(', ')}</h5>
                {restaurant.info.avgRating} <br/>
                {restaurant.info.costForTwo}
            </div>
        </div>
    )
}

const BodyComponent = () => {
    return (
        <div className='body'>
            <div className='search-container'>
                <input className='search-bar' type='text'/>
            </div>
            <div className='res-card-container'>
                {
                    Restaurants.map((restaurant) => (
                        <RestraCardComponent key={restaurant.info.id} restaurant={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppComponent = () => {
    return (
        <>
            <HeaderComponent/>
            <BodyComponent/>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById('root-container'));

root.render(<AppComponent/>);