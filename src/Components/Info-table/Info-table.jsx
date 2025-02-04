import '../../index.css'
import './styles.css'

export default function InfoTable(props){
    return(
        <>
        <div className='flex flex-col justify-around w-[306px] h-[498px] rounded-[0.8rem] shadow-normal p-8 divide-y divide-gray-200'>
            <div className='flex items-center gap-x-7 pb-8'>
                <div>
                    <img src="./public/images/icon/info-icon-01.png" alt="icon"/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-2xl'>{props.space}</span>
                    <span className='text-gray-400 text-[17px]'>Total Flat Space</span>
                </div>
            </div>
            <div className='flex items-center gap-x-7 pb-8'>
                <div>
                    <img src="./public/images/icon/info-icon-02.png" alt="icon"/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-2xl'>Contract</span>
                    <span className='text-gray-400 text-[17px]'>Contract Ready</span>
                </div>
            </div>
            <div className='flex items-center gap-x-7 pb-8'>
                <div>
                    <img src="./public/images/icon/info-icon-03.png" alt="icon"/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-2xl'>Payment</span>
                    <span className='text-gray-400 text-[17px]'>Payment Process</span>
                </div>
            </div>
            <div className='flex items-center gap-x-7'>
                <div>
                    <img src="./public/images/icon/info-icon-04.png" alt="icon"/>
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-2xl'>Safety</span>
                    <span className='text-gray-400 text-[17px]'>{props.safety} Under Control</span>
                </div>
            </div>
        </div>
        </>
    )
}