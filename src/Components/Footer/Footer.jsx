import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <>
            <div className='text-center bg-zinc-950 text-white h-auto sm:h-20 md:h-30 sm:py-0 py-4'>
                <div className='container mx-auto px-4 xl:px-20'>
                    <p className="block text-base md:text-lg sm:leading-[80px] md:leading-[120px]">
                        Copyright © 2048 Villa Agency. All rights reserved. Design:
                        <a className="mx-1.5 text-left" href="https://github.com/nikkihosseini" target="_blank">
                           <span>NikkiHosseini</span>
                           <FontAwesomeIcon className='fa-lg mr-2' icon={faGithub}/>
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}