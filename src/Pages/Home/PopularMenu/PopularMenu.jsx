import MenuItem from "../../../Components/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const[menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            />

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>

            <button className='btn btn-outline border-0 border-b-4 text-black '>View Full Menu</button>

        </section>
    );
};

export default PopularMenu;