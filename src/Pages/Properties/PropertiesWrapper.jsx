import { useState , Fragment} from "react"
import PropertiesBox from "../../Components/PropertiesBox/PropertiesBox"
import PropertiesBtn from "./PropertiesBtn"
import {propertiesData} from './propertiesData'
import {categoryContext} from './categoryContext'
import { AnimatePresence } from "framer-motion"



export default function PropertiesWrapper(){

    const [category, setCategory] = useState(propertiesData);
   
    return(
        <Fragment>
            <categoryContext.Provider value={{ category , setCategory }}>
                    <div className="container mx-auto px-4 xl:px-20">
                        <div className="flex flex-col items-center justify-center my-10 gap-y-10 md:my-30 md:gap-y-20">
                            <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                                <PropertiesBtn/>
                            </div> 
                            <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-9'>
                                <AnimatePresence>
                                    {category.map((item) => (
                                        <PropertiesBox key={item.id} {...item}/>
                                    ))}
                                </AnimatePresence>
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
                </categoryContext.Provider>
        </Fragment>
    )
}