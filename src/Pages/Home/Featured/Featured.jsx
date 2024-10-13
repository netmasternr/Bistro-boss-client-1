import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-black pt-8'>
            <SectionTitle
            heading='Check It Out'
            subHeading='Featured Item' />

            <div className='flex items-center gap-10 pb-20 pt-12 px-36 bg-slate-50 bg-opacity-40'>
                <div>
                    <img className='' src={featuredImage} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2019</p>
                    <p className='uppercase'>where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed fuga beatae et possimus dolorem, officiis nisi porro velit sit.</p>

                    <button className='btn btn-outline border-0 border-b-4 text-black'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;