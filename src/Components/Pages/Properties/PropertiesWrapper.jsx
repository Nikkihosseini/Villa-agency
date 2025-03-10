

export default function PropertiesWrapper(){
    return(
        <>
        <div className="flex items-center justify-center mt-30">
            <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                <button className='bg-red-500 rounded-md w-[90px] h-[35px] sm:w-[100px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base'>Show All</button>
                <button className='bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all hover:text-red-500 text-sm md:text-base'>Appartment</button>
                <button className='bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all hover:text-red-500 text-sm md:text-base'>Villa House</button>
                <button className='bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all hover:text-red-500 text-sm md:text-base'>Penthouse</button>
            </div> 
            <div></div> 
            <div></div>
        </div> 
        </>
    )
}