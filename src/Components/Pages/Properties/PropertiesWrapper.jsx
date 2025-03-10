import { useState , Fragment} from "react"


export default function PropertiesWrapper(){

    const [active , setActive] = useState('')

    function activeBtn(event){
        setActive(event.target.id)
    }

    return(
        <Fragment>
        <div className="flex items-center justify-center mt-30">
            <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                <button onClick={activeBtn} id="1" className={`bg-zinc-950 ${active === "1" ? 'active' : 'hover:text-red-500'} rounded-md w-[90px] h-[35px] sm:w-[100px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all`}>Show All</button>
                <button onClick={activeBtn} id="2" className={`${active === "2" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Appartment</button>
                <button onClick={activeBtn} id="3" className={`${active === "3" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Villa House</button>
                <button onClick={activeBtn} id="4" className={`${active === "4" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Penthouse</button>
            </div> 
            <div></div> 
            <div></div>
        </div> 
        </Fragment>
    )
}