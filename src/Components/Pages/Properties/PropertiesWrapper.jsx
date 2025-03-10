import { useState , Fragment} from "react"
import PropertiesBox from "../../PropertiesBox/PropertiesBox"
import Footer from "../../Footer/Footer"
import {propertiesData} from './propertiesData'


export default function PropertiesWrapper(){
   
    const [active , setActive] = useState('')

    const [category, setCategory] = useState(propertiesData);

   
    function handleBtns(event){

        setActive(event.target.id)
        let word=e.target.value;

        if(word === "Show All"){
            setCategory(propertiesData)
          }
          else if(word === "Appartment") {
            const filtered = collectionData.filter(item=>item.kind === "Appartment");
            setCategory(filtered)
          }
          else if(word === "Villa House") {
            const filtered = collectionData.filter(item=>item.kind === "Villa House");
            setCategory(filtered)
          }
          else if(word === "Villa House") {
            const filtered = collectionData.filter(item=>item.kind === "Villa House");
            setCategory(filtered)
          }
    }

    return(
        <Fragment>
            <div className="container mx-auto px-4 xl:px-20">
                <div className="flex flex-col items-center justify-center my-10 gap-y-10 md:my-30 md:gap-y-20">
                    <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                        <button onClick={handleBtns} id="1" className={`bg-zinc-950 ${active === "1" ? 'active' : 'hover:text-red-500'} rounded-md w-[90px] h-[35px] sm:w-[100px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all`}>Show All</button>
                        <button onClick={handleBtns} id="2" className={`${active === "2" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Appartment</button>
                        <button onClick={handleBtns} id="3" className={`${active === "3" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Villa House</button>
                        <button onClick={handleBtns} id="4" className={`${active === "4" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Penthouse</button>
                    </div> 
                    <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-9'>
                    {category.map((item) => (
                            <PropertiesBox key={item.id} {...item}/>
                        ))}
                    </div> 
                    <div>
                        <div className="flex items-center justify-center gap-x-4">
                            <button className="w-[40px] h-[40px] rounded-full bg-zinc-950 text-white cursor-pointer">1</button>
                            <button className="w-[40px] h-[40px] rounded-full bg-zinc-950 text-white cursor-pointer">2</button>
                            <button className="w-[40px] h-[40px] rounded-full bg-zinc-950 text-white cursor-pointer">3</button>
                            <button className="flex items-center justify-center leading-[34px] w-[40px] h-[40px] rounded-full bg-zinc-950 text-white cursor-pointer text-xl">&raquo;</button>
                        </div>
                    </div>
                </div> 
            </div>
            <Footer/>
        </Fragment>
    )
}