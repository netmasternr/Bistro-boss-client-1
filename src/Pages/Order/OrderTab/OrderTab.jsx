/* eslint-disable react/prop-types */

import FoodCard from "../FoodCard/FoodCard";

const OrderTap = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                        items.map(item => <FoodCard item={item} key={item._id} />)
                    }
        </div>
    );
};

export default OrderTap;