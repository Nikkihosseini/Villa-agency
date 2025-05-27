import MyMap from '../../Components/GoogleMap/MyMap.jsx'
import ContactForm from '../../Components/ContactUs/ContactForm.jsx'



export default function ContactUsSection(){
    return(
        <>
            <div className="container mx-auto px-4 xl:px-20">
                <div className='my-15 lg:my-25'>
                    <div className='flex lg:flex-row flex-col justify-between mb-20'>
                       <div className='w-full lg:w-[50%]'>
                           <div>
                                <div className='flex flex-col items-start'>
                                    <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 xl:mb-4'>Contact Us</h4>
                                    <h3 className='text-zinc-950 font-bold text-3xl md:text-5xl md:leading-15 w-[210px] md:w-[350px] 2xl:w-[400px]'>Get In Touch With Our Agents</h3>
                                </div>
                                <p className='line-clamp-4 leading-8 max-w-[636px] mt-8 text-gray-700'>
                                   When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                                </p>
                           </div>
                           <div className='mt-8'>
                                <div className='flex flex-col items-start justify-between gap-y-8 lg:gap-x-10 '>
                                    <div className='flex items-center text-start w-full lg:w-1/2 gap-x-6 shadow-normal rounded-[0.8rem] p-8 bg-white'>
                                        <img src="images/icon/phone-icon.png" alt="phone-icon"/>
                                            <div className='flex flex-col'>
                                                <span className='font-bold text-base sm:text-lg xl:text-xl'>010-020-0340</span>
                                                <span className='text-gray-400'>Phone Number</span>
                                            </div>
                                    </div>
                                <div className='flex items-center text-start w-full lg:w-1/2 gap-x-6 shadow-normal rounded-[0.8rem] p-8 bg-white '>
                                    <img src="images/icon/email-icon.png" alt="phone-icon"/>
                                    <div className='flex flex-col'>
                                        <span className='font-bold text-base sm:text-lg xl:text-xl'>info@villa.co</span>
                                        <span className='text-gray-400'>Business Email</span>
                                    </div>
                                </div>
                                </div>
                           </div>
                       </div>
                                <ContactForm/>
                    </div>
                    <div className='rounded-[0.8rem] overflow-hidden'>
                        <MyMap/>
                    </div>
                </div>
            </div>      
        </>
    )
}