import SinglePropertyTabel from './SinglePropertyTabel'
import { Accordion } from 'flowbite-react';
import BestDeal from '../Home/Main/BestDeal/BestDeal'


export default function SinglePpropertySection(props){
    return(
        <>
        <div className='container mx-auto px-4 xl:px-20'>
            <div className='flex flex-col items-start xl:flex-row my-15 lg:my-25 xl:gap-5 2xl:gap-25'>
            <div className='flex flex-col mx-auto xl:mx-0 max-w-[855px]'>
                <div className='flex flex-col border-b border-gray-200 pb-8 mb-8'>
                    <div className='items-center xl:items-start max-w-[855px] max-h-[476px] mb-10'>
                        <img className='inline-block max-h-[498px] w-full' src="images/image/single-property/single-property.jpg" alt="Apparment-img"/>
                    </div>
                    <span className='block max-w-[105px] text-center bg-red-100 rounded-md font-semibold px-2 py-1 mb-5'>{props.category}</span>
                    <h4 className='w-full text-start font-bold text-base sm:text-2xl line-clamp-1'>{props.caption}</h4>
                </div>
                <div>
                    <p className='text-gray-700 mb-6 line-clamp-3'>Get <strong className='text-gray-800'>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you <a className='text-blue-600' href="https://www.google.com/search?q=best+free+css+templates">the best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>
                    <p className='text-gray-700 line-clamp-3'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
                </div>
                <div className='mt-15'>
                    <Accordion className='bg-zinc-50 border-none dark:border-none dark:divide-gray-200 dark:border-gray-200 transition w-auto'>
                        <Accordion.Panel className='bg-zinc-50'>
                            <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>Best useful links ?</Accordion.Title>
                                <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                    <p className="text-gray-700 mb-2 line-clamp-3">
                                        Get <strong className='text-gray-800'>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a className='text-blue-400' href="">best free CSS templates</a> in the world. Please tell your friends about it.
                                    </p>
                                    </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                    <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold  dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>How does this work ?</Accordion.Title>
                                    <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                        <p className="text-gray-700 mb-2 line-clamp-3">
                                            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod temporincididunt utlabore consectetur <code className='text-pink-500'>adipiscing</code> elit, sed do eiusmod tempor incididunt utlabore et doloremagna aliqua.
                                        </p>
                                    </Accordion.Content>
                                    </Accordion.Panel>
                                    <Accordion.Panel>
                                    <Accordion.Title className='dark:bg-zinc-50 dark:text-zinc-950 font-semibold  dark:hover:bg-zinc-50 dark:focus:ring-zinc-50 focus:ring-0 p-3'>Why is Villa Agency the best ?</Accordion.Title>
                                    <Accordion.Content className='dark:bg-zinc-50 text-zinc-950 p-3'>
                                        <p className="text-gray-700 mb-2 line-clamp-3">
                                            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code className='text-pink-500'>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
            <div className='mt-15 xl:mt-0 w-full max-w-[855px] mx-auto xl:mx-0'>
                <SinglePropertyTabel space='450 m2' safety='24/7'/>
            </div>
            </div>
            <BestDeal/>
        </div>
        </>
    )
}