import SinglePropertyTabel from './SinglePropertyTabel'


export default function SinglePpropertySection(props){
    return(
        <>
        <div className='container mx-auto px-4 xl:px-20'>
            <div className='flex justify-between mt-25 gap-25 border-b border-gray-200 pb-10 mb-8'>
                <div className='flex items-start flex-col'>
                    <div className='w-[855px] h-[476px] mb-10'>
                        <img className='inline-block w-full h-full' src="./images/image/single-property/single-property.jpg" alt="Apparment-img"/>
                    </div>
                    <span className='block bg-red-100 rounded-md font-semibold text-sm px-2 py-1 mb-5'>{props.category}</span>
                    <h4 className='w-full text-start font-bold text-base sm:text-2xl line-clamp-1'>{props.caption}</h4>
                </div>
                <SinglePropertyTabel space='450 m2' safety='24/7'/>
            </div>
        </div>
        </>
    )
}