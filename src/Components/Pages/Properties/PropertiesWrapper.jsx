import { useState , Fragment} from "react"
import PropertiesBox from "../../PropertiesBox/PropertiesBox"
import Footer from "../../Footer/Footer"


export default function PropertiesWrapper(){
    const Data = [
        {
            id: 1,
            img: './public/images/image/property/property-01.jpg',
            category: 'Luxury Villa',
            price: '2.264.000',
            caption: '18 New Street Miami, OR 97219',
            bedrooms: 8 ,
            bathrooms: 8 ,
            area: 545,
            floor: 3,
            parking: '6 spots'
        },
        {
            id: 2,
            img: './public/images/image/property/property-02.jpg',
            category: 'Luxury Villa',
            price: '1.180.000',
            caption: '54 Mid Street Florida, OR 27001',
            bedrooms: 6,
            bathrooms: 5,
            area: 450,
            floor: 3,
            parking: '8 spots'
        },
        {
            id: 3,
            img: './public/images/image/property/property-03.jpg',
            category: 'Luxury Villa',
            price: '1.460.000',
            caption: '26 Old Street Miami, OR 38540',
            bedrooms: 5 ,
            bathrooms: 4 ,
            area: 255,
            floor: 3,
            parking: '10 spots'
        },
        {
            id: 4,
            img: './public/images/image/property/property-04.jpg',
            category: 'Apartment',
            price: '584.500',
            caption: '12 New Street Miami, OR 12650',
            bedrooms: 4 ,
            bathrooms: 3 ,
            area: 125,
            floor: '25th',
            parking: '2 cars'
        },
        {
            id: 5,
            img: './public/images/image/property/property-05.jpg',
            category: 'Penthouse',
            price: '925.600',
            caption: '34 Beach Street Miami, OR 42680',
            bedrooms: 4 ,
            bathrooms: 4 ,
            area: 180,
            floor: '298th',
            parking: '2 cars'
        },
        {
            id: 6,
            img: './public/images/image/property/property-06.jpg',
            category: 'Modern Condo',
            price: '450.000',
            caption: '22 New Street Portland, OR 16540',
            bedrooms: 3 ,
            bathrooms: 2 ,
            area: 165,
            floor: '26th',
            parking: '3 cars'
        },
        {
            id: 7,
            img: './public/images/image/property/property-01.jpg',
            category: 'Modern Condo',
            price: '450.000',
            caption: '22 New Street Portland, OR 16540',
            bedrooms: 3 ,
            bathrooms: 2 ,
            area: 165,
            floor: '26th',
            parking: '3 cars'
        },
        {
            id: 8,
            img: './public/images/image/property/property-02.jpg',
            category: 'Modern Condo',
            price: '450.000',
            caption: '22 New Street Portland, OR 16540',
            bedrooms: 3 ,
            bathrooms: 2 ,
            area: 165,
            floor: '26th',
            parking: '3 cars'
        },
        {
            id: 9,
            img: './public/images/image/property/property-03.jpg',
            category: 'Modern Condo',
            price: '450.000',
            caption: '22 New Street Portland, OR 16540',
            bedrooms: 3 ,
            bathrooms: 2 ,
            area: 165,
            floor: '26th',
            parking: '3 cars'
        }
    ]

    const [active , setActive] = useState('')
   
    function activeBtn(event){
        setActive(event.target.id)
    }

    return(
        <Fragment>
            <div className="container mx-auto px-4 xl:px-20">
                <div className="flex flex-col items-center justify-center my-30 gap-y-20">
                    <div className='flex items-center justify-center gap-x-4 text-white font-semibold flex-wrap sm:flex-nowrap  gap-y-3 sm:gap-y-0'>
                        <button onClick={activeBtn} id="1" className={`bg-zinc-950 ${active === "1" ? 'active' : 'hover:text-red-500'} rounded-md w-[90px] h-[35px] sm:w-[100px] sm:h-[45px] cursor-pointer tracking-wide text-sm md:text-base transition-all`}>Show All</button>
                        <button onClick={activeBtn} id="2" className={`${active === "2" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Appartment</button>
                        <button onClick={activeBtn} id="3" className={`${active === "3" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Villa House</button>
                        <button onClick={activeBtn} id="4" className={`${active === "4" ? 'active' : 'hover:text-red-500'} bg-zinc-950 rounded-md w-[110px] h-[35px] sm:w-[130px] sm:h-[45px] cursor-pointer tracking-wide transition-all text-sm md:text-base`}>Penthouse</button>
                    </div> 
                    <div className='grid md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-9'>
                        <PropertiesBox {...Data[0]}/>
                        <PropertiesBox {...Data[1]}/>
                        <PropertiesBox {...Data[2]}/>
                        <PropertiesBox {...Data[3]}/>
                        <PropertiesBox {...Data[4]}/>
                        <PropertiesBox {...Data[5]}/>
                        <PropertiesBox {...Data[6]}/>
                        <PropertiesBox {...Data[7]}/>
                        <PropertiesBox {...Data[8]}/>
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