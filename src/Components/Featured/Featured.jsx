import '../../index.css'
import '../styles/line-before.css'
import { Accordion } from 'flowbite-react';
import InfoTable from '../Info-table/Info-table.jsx'

export default function Featured() {
    return(
        <>
            <div className='container mx-auto px-4 xl:px-20'>
               <div className='flex items-center justify-around gap-x-8 px-8 my-26 h-[498px]'>
                <div className='relative'>
                        <div className='w-[355px] h-[490px]'>
                            <img className='block w-full h-full' src="./public/images/image/featured/featured.jpg" alt="featured"/>  
                        </div>
                        <a className='flex absolute bottom-[-52px] left-[-52px] items-center justify-center w-[110px] h-[110px] bg-red-500 rounded-full' href='#'>
                            <img src="./public/images/icon/featured-icon.png" alt="featured-icon"/>
                        </a>
                    </div>
                    <div className='flex flex-col justify-between max-w-[550px] h-full'>
                        <div className='flex flex-col items-start gap-y-8'>
                            <h4 className=' line-before text-red-500 relative font-bold uppercase ml-2.5'>Featured</h4>
                            <h3 className='font-bold text-5xl max-w-[400px]'>Best Appartment & Sea view</h3>
                        </div>
                        <div>
                            <Accordion className='bg-zinc-50 border-none dark:border-none dark:divide-gray-200 dark:border-gray-200 transition w-[550px]'>
                                <Accordion.Panel className='bg-zinc-50'>
                                    <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>Best useful links ?</Accordion.Title>
                                        <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                            <p className="mb-2 line-clamp-3">
                                               Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a className='text-blue-400' href="">best free CSS templates</a> in the world. Please tell your friends about it.
                                            </p>
                                        </Accordion.Content>
                                        </Accordion.Panel>
                                        <Accordion.Panel>
                                        <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold  dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>How does this work ?</Accordion.Title>
                                        <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                            <p className="mb-2 line-clamp-3">
                                              Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod temporincididunt utlabore consectetur <code className='text-pink-500'>adipiscing</code> elit, sed do eiusmod tempor incididunt utlabore et doloremagna aliqua.
                                            </p>
                                        </Accordion.Content>
                                        </Accordion.Panel>
                                        <Accordion.Panel>
                                        <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold  dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>Why is Villa Agency the best ?</Accordion.Title>
                                        <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                            <p className="mb-2 line-clamp-3">
                                               Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code className='text-pink-500'>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                    </Accordion.Content>
                                    </Accordion.Panel>
                                </Accordion>
                        </div>
                    </div>
                    <div>
                        <InfoTable space='250 m2' safety='24/7'/>
                    </div>
               </div>
            </div>
        </>
    )
}