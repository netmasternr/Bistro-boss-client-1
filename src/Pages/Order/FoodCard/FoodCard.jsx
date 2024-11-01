/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt='image' />
            </figure>
            <p className="bg-slate-900 px-2 absolute right-4 top-4 text-white">${price}</p>
            <div className="card-body flex-1 items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-100 btn-outline border-0 border-b-4 border-orange-300 text-amber-600 px-6">Buy Now</button>
                </div>
            </div> 
        </div>
    );
};

export default FoodCard;