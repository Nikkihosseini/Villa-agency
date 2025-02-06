import '../../../index.css'
import '../styles/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import InfoBox from './InfoBox.jsx'

export default function VideoView(){
    return(
        <>
        <div className='my-12 md:my-26'>
            <div className='hidden md:flex'>
                <img src="./public/images/image/video-img/video-bg.jpg" alt="video-bg"/> 
            </div>
            <div className='container mx-auto px-4 xl:px-20'>
                <div className='flex flex-col items-center justify-between gap-y-10 lg:gap-y-15 xl:gap-y-18 text-center md:mt-[-15rem] lg:mt-[-21rem] xl:mt-[-26rem]'>
                    <div className='flex flex-col items-center'>
                        <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 xl:mb-4'>Video View</h4>
                        <h3 className='text-zinc-950 md:text-white font-bold text-2xl md:text-4xl xl:text-5xl max-w-[25rem] xl:max-w-[33rem] md:leading-15'>Get Closer View & Different Feeling</h3>
                    </div>
                    <div>
                    <div className='relative rounded-lg overflow-hidden max-w-[1070px] max-h-[480px] shadow-normalg'>
                        <img className='w-full h-full' src="./public/images/image/video-img/video-frame.jpg" alt="video-frame"/>
                        <a className='before-circle flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 m-auto bg-white w-10 h-10 md:w-13 md:h-13 rounded-full' href="https://www.youtube.com/">
                        <FontAwesomeIcon className='text-red-500 md:fa-lg' icon={faPlay}/></a>
                    </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-y-10 2xl:gap-y-0 gap-x-30 xl:gap-x-42 flex-wrap'>
                        <InfoBox number='34' text='Buildings Finished Now'/>
                        <InfoBox number='12' text='Years Experience'/>
                        <InfoBox number='24' text='Awwards Won 2023'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}