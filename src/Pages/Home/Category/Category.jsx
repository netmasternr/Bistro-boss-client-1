import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide3.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <section>
            <SectionTitle
            subHeading={'From 11.30am to 10.00pm'}
            heading={'Order online'}
            />
            
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='text-3xl text-black uppercase text-center -mt-16'>Salads</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-3xl text-black uppercase -mt-16 text-center'>Pizzas</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-3xl uppercase text-black -mt-16 text-center'>Soups</p>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-3xl text-black uppercase -mt-16 text-center'>Desserts</p>
                </SwiperSlide>

            </Swiper>
        </section>
        </div>
    );
};

export default Category;