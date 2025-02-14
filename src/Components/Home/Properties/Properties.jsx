import '../../../index.css'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import PropertiesBox from '../Properties/PropertiesBox.jsx'

export default function Properties(){
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
        }
    ]
    return(
        <>
            <div className='container mx-auto px-4 xl:px-20 py-12 md:py-26'>
                    <div className='md:mb-17 mb-10 flex flex-col items-center justify-center text-center'>
                        <SectionTitle title='Properties' caption='We Provide The Best Property You Like'/>
                    </div>
                    <div className='grid grid-cols-3 gap-9'>
                        <PropertiesBox {...Data[0]}/>
                        <PropertiesBox {...Data[1]}/>
                        <PropertiesBox {...Data[2]}/>
                        <PropertiesBox {...Data[3]}/>
                        <PropertiesBox {...Data[4]}/>
                        <PropertiesBox {...Data[5]}/>
                    </div>
            </div>        
        </>
    )
}