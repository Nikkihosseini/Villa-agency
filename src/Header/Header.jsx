import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap} from '@fortawesome/free-solid-svg-icons'


export default function Header() {

  return (
    <div className='bg-white w-full border-b-1 border-solid border-gray-200'>
     <div className='container mx-auto px-16'>
      <div className='flex items-center justify-between py-4'>
          <div className='text-gray-500'>
            <span className='pr-6 border-r-1 border-solid border-gray-200'>
            <FontAwesomeIcon className='text-red-600 fa-lg mr-2' icon={faEnvelope}/>
              info@company.com</span>
            <span className='ml-6'>
            <FontAwesomeIcon className='text-red-600 fa-lg mr-2' icon={faMap}/>
              Sunny Isles Beach, FL 33160</span>
          </div>
          <div className='flex items-center gap-x-3'>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400' href="https://www.facebook.com">
            <FontAwesomeIcon className='text-white' icon={faFacebook}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400' href="https://www.twitter.com">
            <FontAwesomeIcon className='text-white' icon={faTwitter}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400' href="https://www.linkedin.com">
            <FontAwesomeIcon className='text-white' icon={faLinkedin}/>
            </a>
            <a className='flex items-center justify-center rounded-full w-8 h-8 bg-stone-400' href="https://www.instagram.com">
            <FontAwesomeIcon className='text-white' icon={faInstagram}/>
            </a>
          </div>
      </div>
     </div>
    </div>
  )
}


