import '../../../../index.css'

export default function ContactUs(){
    return(
        <>
           <div className='mb-12 md:mb-26'>
                <div className='hidden md:flex'>
                    <img src="./public/images/image/contact/contact-bg.jpg" alt="contact-bg"/> 
                </div> 
                <div className='container mx-auto px-4 xl:px-20'>
                   <div className='flex flex-col items-center justify-between gap-y-10 lg:gap-y-15 xl:gap-y-18 text-center md:mt-[-15rem] lg:mt-[-21rem] xl:mt-[-26rem]'>
                   <div className='flex flex-col items-center'>
                        <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 xl:mb-4'>Contact Us</h4>
                        <h3 className='text-zinc-950 md:text-white font-bold text-2xl md:text-4xl md:leading-15 w-[210px] md:w-[350px] 2xl:w-[450px]'>Get In Touch With Our Agents</h3>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center justify-between w-full gap-x-10 2xl:gap-x-12'>
                        <div className='h-full w-full lg:w-[60%]'>
                            <div className='h-125 w-full bg-white rounded-[0.8rem] shadow-normal font-bold flex items-center justify-center text-3xl mb-8 lg:mb-12'>Map</div>
                            <div className='flex lg:flex-row flex-col items-center justify-between gap-y-8 lg:gap-x-10'>
                                <div className='flex items-center text-start w-full lg:w-1/2 gap-x-6 shadow-normal rounded-[0.8rem] p-8 bg-white'>
                                <img src="./public/images/icon/phone-icon.png" alt="phone-icon"/>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-base sm:text-lg xl:text-xl'>010-020-0340</span>
                                    <span className='text-gray-400'>Phone Number</span>
                                </div>
                                </div>
                                <div className='flex items-center text-start w-full lg:w-1/2 gap-x-6 shadow-normal rounded-[0.8rem] p-8 bg-white '>
                                <img src="./public/images/icon/email-icon.png" alt="phone-icon"/>
                                <div className='flex flex-col'>
                                    <span className='font-bold text-base sm:text-lg xl:text-xl'>info@villa.co</span>
                                    <span className='text-gray-400'>Business Email</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-8 lg:mt-0 lg:w-[40%] p-6 bg-white rounded-[0.8rem] text-start text-gray-700 shadow-normal'>
                            <form>
                                <label htmlFor="name">Full Name</label>
                                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='name' type="text" placeholder='Your Name...'/>
                                <label htmlFor="name">Email Address</label>
                                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='name' type="text" placeholder='Your E-mail...'/>
                                <label htmlFor="name">Subject</label>
                                <input className='block bg-gray-50 w-full h-10 mt-3 mb-8 focus:border-zinc-950 rounded-4xl px-5' id='name' name='name' type="text" placeholder='Subject...'/>
                                <label htmlFor="name">Message</label>
                                <textarea className='block bg-gray-50 w-full mt-3 mb-12 focus:border-zinc-950 rounded-2xl px-5 pt-3 resize-y max-h-[12rem] min-h-[10rem]' name="textarea" id="textarea" placeholder='Your Message'></textarea>
                            </form>
                            <button className='font-semibold flex items-center justify-center w-[160px] h-[38px] sm:w-[170px]  sm:h-[45px] bg-zinc-950 text-white hover:bg-red-500 rounded-full transition-all cursor-pointer mx-auto sm:mx-0' type='submit'>Send Message</button>
                        </div>
                    </div>
                   </div>
                </div>
           </div>
        </>
    )
}