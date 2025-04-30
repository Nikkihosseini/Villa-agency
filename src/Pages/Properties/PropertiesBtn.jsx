import { Fragment , useContext , useState} from "react"
import {btnCategory} from './btnCategory'
import {categoryContext} from './categoryContext'
import {propertiesData} from '../../Data/propertiesData'
import PropertiesBox from "../../Components/PropertiesBox/PropertiesBox"
import { Link } from "react-router"






export default function PropertiesBtn(){
    
    const {category , setCategory} = useContext(categoryContext)

    const [active , setActive] = useState(1)

    function handleBtns(id,name){
      setActive(id)

      if(name === "Show All"){
        setCategory(category)
        }
        else if(name === "Apartment") {
          const filtered = category.filter(item=>item.category === 'Apartment');
          setCategory(filtered)
          console.log(category
          )
        }
        else if(name === "Luxury Villa") {
          const filtered = category.filter(item=>item.category === "Luxury Villa");
          setCategory(filtered)
        }
        else if(name === "Penthouse") {
          const filtered = category.filter(item=>item.category === "Penthouse");
          setCategory(filtered)
        }
        else if(name === "Modern Condo") {
          const filtered = category.filter(item=>item.category === "Modern Condo");
          setCategory(filtered)
        }
  }
    

    return(
        <Fragment>
          {btnCategory.map((item) => {
            return <button key={item.id} onClick={() => handleBtns(item.id,item.name)} id={item.id} className={`bg-zinc-950 ${active === item.id ? 'active' : 'hover:text-red-500'} rounded-md w-auto px-4 h-[35px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all flex items-center justify-center`}>{item.name}</button>
          })}
        </Fragment>
    )
}