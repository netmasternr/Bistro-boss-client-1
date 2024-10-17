/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt='image'/>
            </figure>
            <p className="bg-slate-900 px-2 absolute right-4 top-4 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;