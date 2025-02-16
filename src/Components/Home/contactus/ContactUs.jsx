import '../../../index.css'

export default function ContactUs(){
    return(
        <>
           <div>
                <div className='hidden md:flex'>
                    <img src="./public/images/image/contact/contact-bg.jpg" alt="contact-bg"/> 
                </div>
                <div className='container mx-auto px-4 xl:px-20 py-12 md:py-26 my-12 md:my-26'>
                <div className='flex flex-col items-center'>
                        <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 xl:mb-4'>Contact Us</h4>
                        <h3 className='text-zinc-950 md:text-white font-bold text-2xl md:text-4xl md:leading-15 w-[210px] md:w-[350px] 2xl:w-[450px]'>Get In Touch With Our Agents</h3>
                    </div>
                </div>
            </div>
        </>
    )
}