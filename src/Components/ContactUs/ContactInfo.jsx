

export default function ContactInfo(){
    return(
        <>
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
        </>
    )
}