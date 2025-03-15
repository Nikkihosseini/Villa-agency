import { Fragment , useContext , useState} from "react"
import {btnCategory} from './btnCategory'
import {categoryContext} from './categoryContext'
import {propertiesData} from '../../Data/propertiesData'
import PropertiesBox from "../../Components/PropertiesBox/PropertiesBox"






export default function PropertiesBtn(){
    
    const {displayPropertie , category , setCategory} = useContext(categoryContext)

    const [active , setActive] = useState(1)
    
    function handleBtns(id,name){

      setActive(id)

      if(name === "Show All"){
          setCategory(displayPropertie)
        }
        else if(name === "Apartment") {
          const filtered = displayPropertie.filter(item=>item.props.category === 'Apartment');
          setCategory(filtered)
          console.log(category)
        }
        else if(name === "Luxury Villa") {
          const filtered = displayPropertie.filter(item=>item.props.category === "Luxury Villa");
          setCategory(filtered)
        }
        else if(name === "Penthouse") {
          const filtered = displayPropertie.filter(item=>item.props.category === "Penthouse");
          setCategory(filtered)
        }
        else if(name === "Modern Condo") {
          const filtered = displayPropertie.filter(item=>item.props.category === "Modern Condo");
          setCategory(filtered)
        }
  }

    return(
        <Fragment>
          {btnCategory.map((item) => {
            return <button key={item.id} onClick={() => handleBtns(item.id,item.name)} id={item.id} className={`bg-zinc-950 ${active === item.id ? 'active' : 'hover:text-red-500'} rounded-md w-auto px-4 h-[35px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all`}>{item.name}</button>
          })}
        </Fragment>
    )
}