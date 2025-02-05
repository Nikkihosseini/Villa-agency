import React, { useRef, useState } from 'react';
import '../../index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Customiz style => Navigation and Pagination 
import './customiz-swiper.css';

export default function HeaderBanner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative z-30 overflow-hidden'>
            <div className='container mx-auto px-4 xl:px-20 absolute overflow-y-hidden h-full md:min-h-screen flex items-center justify-start'>
              <div className='ml-10 md:ml-30 lg:ml-50 sm:mt-[-2rem]  md:mt-[-20rem] lg:mt-[-12rem] xl:mt-0'>
                <span className='inline-block font-semibold text-base md:text-[17px] bg-white py-1 md:py-2 px-2 md:px-3 tracking-wider line-clamp-1 md:mb-4'>Toronto,<span className='text-red-500'>Canada</span></span>
                <h2 className='text-white text-2xl sm:text-5xl md:text-5xl lg:text-6xl font-bold line-clamp-4 max-w-[485px] lg:leading-22 uppercase'><span className='block max-w-[214px]'>Hurry!</span>Get the Best Villa for you</h2>
              </div>
            </div>
            <img className='h-full w-full' src="./images/image/banner/banner-01.jpg" alt="Toronto,Canada"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative z-30 overflow-x-hidden'>
            <div className='container mx-auto px-4 xl:px-20 absolute overflow-y-hidden h-full md:min-h-screen flex items-center justify-start'>
              <div className='ml-50'>
                <span className='inline-block font-semibold text-[17px] bg-white py-2 px-3 tracking-wider line-clamp-1 mb-4'>Melbourne,<span className='text-red-500'>Australia</span></span>
                <h2 className='text-white text-7xl font-bold line-clamp-4 max-w-[485px] leading-22 uppercase'><span className='block max-w-[358px]'>Be Quick!</span>Get the best villa in town</h2>
              </div>
            </div>
            <img src="./images/image/banner/banner-02.jpg" alt="Melbourne,Australia"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative z-30 overflow-x-hidden'>
            <div className='container mx-auto px-4 xl:px-20 absolute overflow-y-hidden h-full md:min-h-screen flex items-center justify-start'>
              <div className='ml-50'>
                <span className='inline-block font-semibold text-[17px] bg-white py-2 px-3 tracking-wider line-clamp-1 mb-4'>Miami,<span className='text-red-500'>South Florida</span></span>
                <h2 className='text-white text-7xl font-bold line-clamp-4 max-w-[539px] leading-22 uppercase'><span className='block max-w-[377px]'>Act Now!</span>Get the highest level penthouse</h2>
              </div>
            </div>
            <img src="./images/image/banner/banner-03.jpg" alt="Miami,South Florida"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}