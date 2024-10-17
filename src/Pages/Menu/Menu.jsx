import { Helmet } from 'react-helmet-async';

import menuImg from '../../assets/menu/featured.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import Cover from '../../Components/Cover/Cover';



const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu)

    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title> Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'Our Menu'} />

            {/* offered */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
            <MenuCategory items={offered} />

            {/* dessert menu items */}
            <MenuCategory
            items={dessert}
            title={'dessert'}
            coverImg={dessertImg}
             />

             {/* pizza menu items */}
             <MenuCategory
             items={pizza}
             title={'pizza'}
             coverImg={pizzaImg}
             />

             {/* salad menu items */}
             <MenuCategory
             items={salad}
             title={'salad'}
             coverImg={saladImg}
             />

             {/* soup menu items */}
             <MenuCategory
             items={soup}
             title={'soup'}
             coverImg={soupImg}
             />
        </div>
    );
};

export default Menu;