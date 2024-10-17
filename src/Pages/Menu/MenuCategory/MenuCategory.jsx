/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../../Components/Cover/Cover";
import MenuItem from "../../../Components/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8 pb-8">
            {title && <Cover img={coverImg} title={title} />}

            <div className='grid md:grid-cols-2 gap-10 pt-8'>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 text-black '>Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;