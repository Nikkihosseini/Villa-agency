import '../../index.css'
import '../styles/styles.css'
import { Accordion } from 'flowbite-react';
import InfoTable from '../Info-table/Info-table.jsx'

export default function Featured() {
    return(
        <>
            <div className='container mx-auto px-4 xl:px-20'>
               <div className='flex flex-col md:flex-row items-center justify-around gap-x-8 px-0 lg:px-8 my-12 md:my-26 md:h-[498px] h-full '>
                <div className='relative 2xl:flex hidden'>
                        <div className='lg:w-[355px] lg:h-[490px]'>
                            <img className='block w-full h-full' src="./public/images/image/featured/featured.jpg" alt="featured"/>  
                        </div>
                        <a className='flex absolute bottom-[-52px] left-[-52px] items-center justify-center w-[110px] h-[110px] bg-red-500 rounded-full' href='#'>
                            <img src="./public/images/icon/featured-icon.png" alt="featured-icon"/>
                        </a>
                    </div>
                    <div className='flex flex-col justify-between max-w-[550px] h-full mx-auto md:mx-0'>
                        <div className='relative flex flex-col items-start'>
                         <div className='md:mb-0 mb-4'>
                            <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 mb-4'>Featured</h4>
                            <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-[210px] md:max-w-[400px]'>Best Appartment & Sea view</h3>
                         </div>
                         <a className='flex 2xl:hidden items-center justify-center absolute right-0 bottom-0 md:bottom-[-85px] lg:bottom-[-8px] md:w-[110px] md:h-[110px] w-[90px] h-[90px] bg-red-500 rounded-full mb-4' href='#'>
                            <img src="./public/images/icon/featured-icon.png" alt="featured-icon"/>
                         </a>
                        </div>
                        <div>
                            <Accordion className='bg-zinc-50 border-none dark:border-none dark:divide-gray-200 dark:border-gray-200 transition w-[330px] sm:w-[530px] md:w-[390px] lg:w-[470px] 2xl:w-[550px]'>
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
                    <div className='flex sm:hidden md:flex mt-8 md:mt-0'>
                        <InfoTable space='250 m2' safety='24/7'/>
                    </div>
                    <div className='hidden sm:flex md:hidden mt-5'>
                       <div className='relative lg:w-[355px] lg:h-[490px] rounded-[0.8rem] overflow-hidden'>
                            <img className='block w-full h-full' src="./public/images/image/featured/featured.jpg" alt="featured"/> 
                        </div>
                        <InfoTable space='250 m2' safety='24/7'/>
                    </div>
               </div>
            </div>
        </>
    )
}