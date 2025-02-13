import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap, faCalendar} from '@fortawesome/free-solid-svg-icons'


export default function Header() {

  return (
    <>
    <div className='bg-white w-full border-b-1 border-solid border-gray-200 hidden lg:block'>
     <div className='container mx-auto px-4 xl:px-20'>
      <div className='flex items-center justify-between py-4'>
          <div className='text-gray-500'>
            <span className='pr-6 border-r-1 border-solid border-gray-200'>
            <FontAwesomeIcon className='text-red-500 fa-lg mr-2' icon={faEnvelope}/>
              info@company.com</span>
            <span className='ml-6'>
            <FontAwesomeIcon className='text-red-500 fa-lg mr-2' icon={faMap}/>
              Sunny Isles Beach, FL 33160</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400 hover:bg-red-500 transition-all' href="https://www.facebook.com">
            <FontAwesomeIcon className='text-white' icon={faFacebook}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400 hover:bg-red-500 transition-all' href="https://www.twitter.com">
            <FontAwesomeIcon className='text-white' icon={faTwitter}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400 hover:bg-red-500 transition-all' href="https://www.linkedin.com">
            <FontAwesomeIcon className='text-white' icon={faLinkedin}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400 hover:bg-red-500 transition-all' href="https://www.instagram.com">
            <FontAwesomeIcon className='text-white' icon={faInstagram}/>
            </a>
          </div>
      </div>
     </div>
    </div>

    <div className='bg-white w-full h-[80px] lg:h-[104px] z-40 sticky'>
      <div className='container mx-auto px-4 xl:px-20'>
      <div className='flex items-center justify-between py-5 lg:py-8'>
       <div>
         <a href="index.html">
          <h1 className='font-bold text-3xl tracking-wider'>VILLA</h1>
         </a>
       </div>
      <div className='hidden md:flex items-center gap-x-10 '>
        <div>
          <ul className='flex items-center gap-x-6 lg:gap-x-12'>
            <li>
              <a className='font-semibold text-red-500 hover:text-red-500 transition-all' href="#">
                Home
              </a>
            </li>
            <li>
              <a className='font-semibold hover:text-red-500 transition-all' href="#">
              Properties
              </a>
            </li>
            <li>
              <a className='font-semibold hover:text-red-500 transition-all' href="#">
              Property Details
              </a>
            </li>
            <li>
              <a className='font-semibold hover:text-red-500 transition-all' href="#">
              Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a className='font-semibold relative flex items-center py-2 pr-5 pl-14 bg-zinc-950 text-white hover:text-red-500 rounded-full transition-all' href='#'>
        <span className='flex items-center justify-center absolute left-0 bg-red-500 w-10 h-10 rounded-full'>
          <FontAwesomeIcon className='text-white' icon={faCalendar}/>
          </span>
          Schedule a visit
        </a>
       </div>
        <div className='md:hidden flex items-center w-10 h-10 justify-center cursor-pointer'>
          <span className='hamburger-menu relative block w-8 h-[0.2rem] bg-zinc-950 rounded-lg transition-all'></span>
        </div>
       </div>
      </div>
      <div className='hidden items-center justify-center relative right-0 left-0 bg-white w-[560px] mx-auto'>
      <ul className='flex flex-col divide-y divide-gray-200 border-t-1 border-solid border-gray-200 items-center tracking-wide w-full text-center'>
            <li className='py-4 w-full'>
              <a className=' text-red-500 hover:text-red-500 transition-all' href="#">
                Home
              </a>
            </li>
            <li className='py-4 w-full'>
              <a className=' hover:text-red-500 transition-all' href="#">
              Properties
              </a>
            </li>
            <li className='py-4 w-full'>
              <a className=' hover:text-red-500 transition-all' href="#">
              Property Details
              </a>
            </li>
            <li className='py-4 w-full'>
              <a className=' hover:text-red-500 transition-all' href="#">
              Contact Us
              </a>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}


