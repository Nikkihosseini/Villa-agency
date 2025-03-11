import { Fragment , useContext , useState} from "react"
import {btnCategory} from './btnCategory'
import {categoryContext} from './categoryContext'
import {propertiesData} from './propertiesData'





export default function PropertiesBtn(){
    
    const {category , setCategory} = useContext(categoryContext)

    const [active , setActive] = useState(1)


    function handleBtns(event){

        setActive(event.target.id)
        let word = event.target.innerHTML;
        console.log(event.target.id)
        console.log(word)

        if(word === "Show All"){
            setCategory(propertiesData)
          }
          else if(word === "Apartment") {
            const filtered = propertiesData.filter(item=>item.category === "Apartment");
            setCategory(filtered)
          }
          else if(word === "Villa House") {
            const filtered = propertiesData.filter(item=>item.category === "Villa House");
            setCategory(filtered)
          }
          else if(word === "Luxury Villa") {
            const filtered = propertiesData.filter(item=>item.category === "Luxury Villa");
            setCategory(filtered)
          }
          else if(word === "Penthouse") {
            const filtered = propertiesData.filter(item=>item.category === "Penthouse");
            setCategory(filtered)
          }
          else if(word === "Modern Condo") {
            const filtered = propertiesData.filter(item=>item.category === "Modern Condo");
            setCategory(filtered)
          }
    }


    return(
        <Fragment>
                {btnCategory.map((item) => {
                    return <button key={item.id} onClick={handleBtns} id={item.id} className={`bg-zinc-950 ${active === item.id ? 'active' : 'hover:text-red-500'} ${category === propertiesData ? 'active' : 'hover:text-red-500'} rounded-md w-auto px-4 h-[35px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all`}>{item.name}</button>
                })}
        </Fragment>
    )
}