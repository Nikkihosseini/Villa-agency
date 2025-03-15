import { useState , Fragment , useEffect} from "react"
import PropertiesBox from "../../Components/PropertiesBox/PropertiesBox"
import PropertiesBtn from "./PropertiesBtn"
import {propertiesData} from '../../Data/propertiesData'
import {categoryContext} from './categoryContext'
import { AnimatePresence } from "framer-motion"
import ReactPaginate from 'react-paginate';





export default function PropertiesWrapper(){


    const [category, setCategory] = useState(propertiesData);

    const [propertie , setPropertie] = useState(category.slice(0,45))

    const [pageNumber, setPageNumber] = useState(0)

    const propertiePrePage = 9

    const pagesVisited = pageNumber * propertiePrePage

    console.log(pageNumber)

    const displayPropertie = propertie.slice(pagesVisited , pagesVisited + propertiePrePage).map((item) => (
        <PropertiesBox key={item.id} {...item}/>
    ))



    const pageCount = Math.ceil(propertie.length / propertiePrePage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    useEffect(()=>{
        window.scrollTo({top: 0 , behavior: 'smooth'});
    },[displayPropertie])

   
    return(
        <Fragment>
            <categoryContext.Provider value={{ displayPropertie , category , setCategory}}>
                    <div className="container mx-auto px-4 xl:px-20">
                        <div className="flex flex-col items-center justify-center my-10 gap-y-10 md:my-30 md:gap-y-20">
                            <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                                <PropertiesBtn/>
                            </div> 
                            <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-9'>
                                <AnimatePresence>
                                  {displayPropertie}
                                </AnimatePresence>
                            </div> 
                            <div className="mb-4 md:mb-0 w-screen flex items-center justify-center">
                                <ReactPaginate
                                    nextLabel={<span className="flex leading-[23px] md:leading-[33px] h-full">&raquo;</span>}
                                    previousLabel={<span className="flex items-start justify-center leading-[23px] md:leading-[33px] h-full">&laquo;</span>}
                                    previousClassName={`${pageNumber === 0 ? 'previousbtnHidden' : "previousbtnVisible"}`}
                                    nextLinkClassName={'nextbtn'}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={'paginationBtns'}
                                    pageClassName={'paginationBtn'}
                                    activeClassName={'paginationActive'}
                                    disabledClassName={'disabledClassName'}>
                                   
                                </ReactPaginate>
                            </div> 
                        </div> 
                    </div>
                </categoryContext.Provider>
        </Fragment>
    )
}