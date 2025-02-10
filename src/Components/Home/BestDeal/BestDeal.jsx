import '../../../index.css'


export default function BestDeal(){
    return(
        <>
            <div className='bg-gray-50 h-[110vh]'>
                <div className='container mx-auto px-4 xl:px-20'>
                   <div className='py-12 md:py-26 w-full'>
                     <div className='flex items-center justify-between'>
                         <div>
                            <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 mb-4'>Best Deal</h4>
                            <h3 className='font-bold text-2xl md:text-4xl xl:text-5xl md:leading-15 max-w-[450px]'>Find Your Best Deal Right Now!
                            </h3>
                         </div>
                         <div className='flex items-center gap-x-4 text-white font-semibold w-[480px]'>
                            <button className='bg-red-500 rounded-md w-[150px] h-[50px] cursor-pointer'>Appartment</button>
                            <button className='bg-zinc-950 rounded-md w-[150px] h-[50px] cursor-pointer hover:w-[149px] hover:h-[49px] transition-all'>Villa House</button>
                            <button className='bg-zinc-950 rounded-md w-[150px] h-[50px] cursor-pointer hover:w-[149px] hover:h-[49px] transition-all'>Penthouse</button>
                         </div> 
                     </div>
                     <div>
                        <div></div>
                        <div></div>
                        <div></div>
                     </div>
                   </div>
                </div>
            </div>
        </>
    )
}