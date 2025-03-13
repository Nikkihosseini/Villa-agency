import { motion } from "framer-motion"
import { Fragment } from 'react';

export default function PropertiesBox({img, category, price, caption, bedrooms, bathrooms, area, floor, parking}){
    

    return(
        <Fragment>
            <motion.div className='flex flex-col items-center justify-center bg-gray-50 rounded-[0.8rem] p-8 w-auto'
               layout
            //    initial={{ transform: "scale(1)"}}
            //    animate={{ transform: "scale(1)"}}
            //    exit={{ transform: "scale(0.9)"}}
               transition={{duration: 0.5}}>
                <div className='flex flex-col items-center justify-center gap-y-5 border-b border-gray-200 pb-8 mb-8'>
                    <a className='w-auto h-auto lg:w-[355.99px] lg:h-[264.44px] rounded-[0.8rem] overflow-hidden' href='#'>
                        <img className='w-full h-full' src={img} alt="Propertie"/>
                    </a>
                    <div className='flex items-center justify-between w-full'>
                        <span className='bg-red-100 rounded-md font-semibold text-sm px-2 py-1'>{category}</span>
                        <h5 className='text-red-500 font-bold text-xl sm:text-2xl line-clamp-1'>${price}</h5>
                    </div>
                    <h4 className='w-full text-start font-bold text-base sm:text-xl line-clamp-1'>{caption}</h4>
                    <div className='flex items-center flex-wrap gap-x-4'>
                        <span className='text-gray-700'>Bedrooms:<span className='text-zinc-950 font-bold text-base sm:text-lg ml-1'>{bedrooms}</span></span>
                        <span className='text-gray-700'>Bathrooms:<span className='text-zinc-950 font-bold text-base sm:text-lg ml-1'>{bathrooms}</span></span>
                        <span className='text-gray-700'>Area:<span className='text-zinc-950 font-bold text-base sm:text-lg ml-1'>{area}m2</span></span>
                        <span className='text-gray-700'>Floor:<span className='text-zinc-950 font-bold text-base sm:text-lg ml-1'>{floor}</span></span>
                        <span className='text-gray-700'>Parking:<span className='text-zinc-950 font-bold text-base sm:text-lg ml-1'>{parking}</span></span>
                    </div>
                </div>
                <a className='font-semibold flex items-center justify-center w-[170px] h-[40px] bg-zinc-950 text-white hover:bg-red-500 rounded-full transition-all' href="#">Schedule a visit</a>
            </motion.div>
        </Fragment>
    )
}