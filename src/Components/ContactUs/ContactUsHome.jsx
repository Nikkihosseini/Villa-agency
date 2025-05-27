import ContactForm from './ContactForm.jsx';
import ContactInfo from './ContactInfo.jsx'
import MyMap from '../GoogleMap/MyMap.jsx'


export default function ContactUsHome(){
    return(
        <>
           <div className='my-12 md:my-26'>
                <div className='hidden md:flex w-full'>
                    <img className='w-full' src="images/image/contact/contact-bg.jpg" alt="contact-bg"/> 
                </div> 
                <div className='container mx-auto px-4 xl:px-20'>
                   <div className='flex flex-col items-center justify-between gap-y-10 lg:gap-y-15 xl:gap-y-18 text-center md:mt-[-15rem] lg:mt-[-21rem] xl:mt-[-26rem]'>
                   <div className='flex flex-col items-center'>
                        <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 xl:mb-4'>Contact Us</h4>
                        <h3 className='text-zinc-950 md:text-white font-bold text-2xl md:text-4xl md:leading-15 w-[210px] md:w-[350px] 2xl:w-[450px]'>Get In Touch With Our Agents</h3>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center justify-between w-full gap-x-10 2xl:gap-x-12'>
                        <div className='h-full w-full lg:w-[60%]'>
                            <div className='h-125 w-full bg-white rounded-[0.8rem] shadow-normal font-bold flex items-center justify-center text-3xl mb-8 lg:mb-12 overflow-hidden'>
                                <MyMap/>
                            </div>
                            <ContactInfo/>
                        </div>
                       <ContactForm/>
                    </div>
                   </div>
                </div>
           </div>
        </>
    )
}