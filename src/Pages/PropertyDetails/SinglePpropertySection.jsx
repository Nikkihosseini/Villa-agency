import SinglePropertyTabel from './SinglePropertyTabel'
import { Accordion } from 'flowbite-react';


export default function SinglePpropertySection(props){
    return(
        <>
        <div className='container mx-auto px-4 xl:px-20'>
            <div className='flex flex-col my-25 mx-auto xl:mx-0'>
                <div className='flex flex-col border-b border-gray-200 pb-8 mb-8'>
                    <div className='items-center xl:items-start w-[855px] h-[476px] mb-10'>
                        <img className='inline-block h-[498px] w-full' src="./images/image/single-property/single-property.jpg" alt="Apparment-img"/>
                    </div>
                    <span className='block max-w-[105px] text-center bg-red-100 rounded-md font-semibold px-2 py-1 mb-5'>{props.category}</span>
                    <h4 className='w-full text-start font-bold text-base sm:text-2xl line-clamp-1'>{props.caption}</h4>
                </div>
                <div>
                    <p className='text-gray-700 mb-6 line-clamp-3'>Get <span className='font-bold text-gray-800'>the best villa agency</span> HTML CSS Bootstrap Template for your company website. TemplateMo provides you <a className='text-blue-600' href="https://www.google.com/search?q=best+free+css+templates">the best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>
                    <p className='text-gray-700 line-clamp-3'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
                </div>
               
            </div>

        </div>
        </>
    )
}