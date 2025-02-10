import '../../../index.css'
import '../styles/styles.css'

export default function InfoTable(props){
    return(
        <>
        <div className='flex flex-col justify-around w-full lg:w-[330px] h-[414px] rounded-[0.8rem] shadow-normal p-6 divide-y divide-gray-200'>
            <div className='flex items-center justify-between pb-6'>
                <span className='text-gray-400 text-[17px]'>Total Flat Space</span>
                <span className='font-bold text-lg sm:text-xl md:text-2xl'>{props.space}</span>
            </div>
            <div className='flex items-center justify-between pb-6'>
                <span className='text-gray-400 text-[17px]'>Floor number</span>
                <span className='font-bold text-lg sm:text-xl md:text-2xl'>{props.floorNumber}</span>
            </div>
            <div className='flex items-center justify-between pb-6'>
                <span className='text-gray-400 text-[17px]'>Number of rooms</span>
                <span className='font-bold text-lg sm:text-xl md:text-2xl'>{props.rooms}</span>
            </div>
            <div className='flex items-center justify-between pb-6'>
                <span className='text-gray-400 text-[17px]'>Parking Available</span>
                <span className='font-bold text-lg sm:text-xl md:text-2xl'>{props.parking}</span>
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-gray-400 text-[17px]'>Payment Process</span>
                <span className='font-bold text-lg sm:text-xl md:text-2xl'>{props.payment}</span>
            </div>
        </div>
        </>
    )
}