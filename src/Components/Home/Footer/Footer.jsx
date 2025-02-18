import '../../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <>
            <div className='flex items-center justify-center bg-zinc-950 text-white h-30'>
                <div className='container'>
                    <p class="flex items-center justify-center gap-1.5 text-lg">
                        Copyright © 2048 Villa Agency. All rights reserved. Design:
                        <a class="flex items-center gap-1.5" href="https://github.com/nikkihosseini" target="_blank">
                           <span>NikkiHosseini</span>
                           <FontAwesomeIcon className='fa-lg mr-2' icon={faGithub}/>
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}