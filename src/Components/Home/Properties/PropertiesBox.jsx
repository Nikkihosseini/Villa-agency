import '../../../index.css'

export default function PropertiesBox(props){
    return(
        <>
            <div className='flex flex-col items-center justify-center bg-gray-50 rounded-[0.8rem] p-8'>
                <div className='flex flex-col items-center justify-center gap-y-5 border-b border-gray-200 pb-8 mb-8'>
                    <a className='w-[355.99px] h-[264.44px] rounded-[0.8rem] overflow-hidden' href='#'>
                        <img className='w-full h-full' src="./public/images/image/property/property-01.jpg" alt="Propertie"/>
                    </a>
                    <div className='flex items-center justify-between w-full'>
                        <span className='bg-red-100 rounded-md font-semibold text-sm px-2 py-1'>Luxury Villa</span>
                        <h5 className='text-red-500 font-bold text-2xl line-clamp-1'>$2.264.000</h5>
                    </div>
                    <h4 className='w-full text-start font-bold text-xl line-clamp-1'>18 New Street Miami, OR 97219</h4>
                    <div className='flex items-center flex-wrap gap-x-4'>
                        <span className='text-gray-700'>Bedrooms:<span className='text-zinc-950 font-bold text-lg ml-1'>8</span></span>
                        <span className='text-gray-700'>Bathrooms:<span className='text-zinc-950 font-bold text-lg ml-1'>8</span></span>
                        <span className='text-gray-700'>Area:<span className='text-zinc-950 font-bold text-lg ml-1'>545m2</span></span>
                        <span className='text-gray-700'>Floor:<span className='text-zinc-950 font-bold text-lg ml-1'>3</span></span>
                        <span className='text-gray-700'>Parking:<span className='text-zinc-950 font-bold text-lg ml-1'>6 spots</span></span>
                    </div>
                </div>
                <a className='font-semibold flex items-center justify-center w-[170px] h-[40px] bg-zinc-950 text-white hover:bg-red-500 rounded-full transition-all' href="#">Schedule a visit</a>
            </div>
        </>
    )
}