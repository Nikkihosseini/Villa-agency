import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect} from 'react'
import { Link , useLocation } from 'react-router'

export default function Header() {

  const location = useLocation()

  const [url, setUrl] = useState(null)

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [isOpen , setIsOpen] = useState(false)
 
  function toggleMobileMenu(){
    setIsOpen(!isOpen)
  }


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
    <div className='sticky top-0 bg-white w-full h-[80px] lg:h-[104px] z-50'>
      <div className='sticky top-0 bg-white w-full h-[80px] lg:h-[104px] z-50'>
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
              <li id='1' className={`font-semibold transition-all ${url === "/" ?" active-page" : "hover:text-red-500"} `}>
                <Link to='/'>Home</Link>
              </li>
              <li id='2' className={`${url === "/properties" ?" active-page" : "hover:text-red-500"} font-semibold transition-all`}>
                <Link to='/properties'>Properties</Link>
              </li>
              <li id='3' className={`${url === "/propertyDetails" ?" active-page" : "hover:text-red-500"} font-semibold transition-all`}>
                <Link to='/propertyDetails'>Property Details</Link>
              </li>
              <li id='4' className={`${url === "/contactUs" ?" active-page" : "hover:text-red-500"} font-semibold transition-all`}>
                <Link to='/contactUs'>Contact Us</Link>
              </li>
            </ul>
        </div>
        <Link className='font-semibold relative flex items-center py-2 pr-5 pl-14 bg-zinc-950 text-white hover:text-red-500 rounded-full transition-all' href='#'>
        <span className='flex items-center justify-center absolute left-0 bg-red-500 w-10 h-10 rounded-full'>
          <FontAwesomeIcon className='text-white' icon={faCalendar}/>
          </span>
          Schedule a visit
        </Link>
       </div>
        <div onClick={toggleMobileMenu} className='mobile-menu-btn md:hidden flex items-center w-10 h-10 justify-center cursor-pointer'>
          <span className='hamburger-menu relative block w-8 h-[0.2rem] bg-zinc-950 rounded-lg transition-all'></span>
        </div>
       </div>
      </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'transition-all ease-in-out top-0 shadow-mobile-menu' : 'transition-all ease-in-out top-[-317px]'} items-center justify-center relative right-0 left-0 bg-white max-w-[560px] mx-auto -z-10`}>
      <ul className='flex flex-col divide-y divide-gray-200 border-t-1 border-solid border-gray-200 items-center tracking-wide w-full text-center'>
            <li className={`${url === "/" ?" active-page" : ''} py-4 w-full font-semibold transition-all`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`${url === "/properties" ?" active-page" : ''} py-4 w-full font-semibold transition-all`}>
              <Link to='/properties'>Properties</Link>
            </li>
            <li className={`${url === "/propertyDetails" ?" active-page" : ''} py-4 w-full font-semibold transition-all`}>
              <Link to='/propertyDetails'>Property Details</Link>
            </li>
            <li className={`${url === "/contactUs" ?" active-page" : ''} py-4 w-full font-semibold transition-all`}>
              <Link to='/contactUs'>Contact Us</Link>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}


