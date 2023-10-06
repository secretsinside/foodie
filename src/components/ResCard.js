const ResCard = (props) => {
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

export default ResCard;