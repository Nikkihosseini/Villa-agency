


export default function ContactForm(){
    return(
    <>
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
                <button className='font-semibold flex items-center justify-center w-[160px] h-[38px] sm:w-[170px]  sm:h-[45px] bg-zinc-950 text-white hover:bg-red-500 rounded-full transition-all cursor-pointer mx-auto sm:mx-0' type='submit'>Send Message</button>
            </form>
        </div>
    </>
    )
}