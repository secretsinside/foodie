import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {showItems, setShowItems} = props;
    const { card } = props?.category?.card;
    return (
        <div className="w-6/12 mx-auto">
            <div className="my-2 bg-slate-300 flex justify-between cursor-pointer"
                onClick={ () => {showItems ? setShowItems(-1) : setShowItems(null)}}>
                <p className="font-bold p-2">{ card.title } ({card.itemCards.length})</p>
                <p className="font-bold mx-4 my-auto text-xl">
                    {showItems ? "-": "+"}
                </p>
            </div>
            <div>
                {showItems && <ItemList items={card.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;