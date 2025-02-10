import '../../../index.css'
import InfoTable from '../Info-table/Info-table.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function BestDeal(){
    return(
        <>
            <div className='bg-gray-50 h-full'>
                <div className='container mx-auto px-4 xl:px-20'>
                   <div className='py-12 md:py-26 w-full'>
                     <div className='flex items-center justify-between mb-20'>
                         <div>
                            <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 mb-4'>Best Deal</h4>
                            <h3 className='font-bold text-2xl md:text-4xl xl:text-5xl md:leading-15 max-w-[450px]'>Find Your Best Deal Right Now!
                            </h3>
                         </div>
                         <div className='flex items-center gap-x-4 text-white font-semibold w-[480px]'>
                            <button className='bg-red-500 rounded-md w-[150px] h-[50px] cursor-pointer tracking-wide text-lg'>Appartment</button>
                            <button className='bg-zinc-950 rounded-md w-[150px] h-[50px] cursor-pointer tracking-wide text-lg hover:w-[149px] hover:h-[49px] transition-all'>Villa House</button>
                            <button className='bg-zinc-950 rounded-md w-[150px] h-[50px] cursor-pointer tracking-wide text-lg hover:w-[149px] hover:h-[49px] transition-all'>Penthouse</button>
                         </div> 
                     </div>
                     <div className='flex items-center justify-around gap-x-5 h-[414px]'>
                        <div>
                            <InfoTable space='185 m2' floorNumber='26th' rooms='4' parking='Yes' payment='Bank' />
                        </div>
                        <div className='w-[520px] h-[414px]'>
                            <img className='w-full h-full' src="./public/images/image/deal/deal-01.jpg" alt="deal1"/>
                        </div>
                        <div className='flex flex-col h-full justify-between w-[330px]'>
                            <h4 className='font-bold text-lg tracking-wider'>
                            Extra Info About Property
                            </h4>

                            <p className='line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                            </p>

                            <p className='line-clamp-4'>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                            </p>
                            
                            <a className='font-semibold w-[60%] relative flex items-center py-2 pr-5 pl-14 bg-zinc-950 text-white hover:text-red-500 rounded-full transition-all' href='#'>
                                <span className='flex items-center justify-center absolute left-0 bg-red-500 w-10 h-10 rounded-full'>
                                <FontAwesomeIcon className='text-white' icon={faCalendar}/>
                                </span>Schedule a visit
                            </a>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
        </>
    )
}