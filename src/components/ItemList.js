const ItemList = (props) => {
    return (
        <div>
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
                                <button className="px-3 py-1 my-2 text-white bg-green-400 rounded-lg text-xs">ADD</button>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;