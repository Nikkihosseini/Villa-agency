import '../../../index.css'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import PropertiesBox from '../Properties/PropertiesBox.jsx'

export default function Properties(){
    return(
        <>
            <div className='container mx-auto px-4 xl:px-20 py-12 md:py-26'>
                    <div className='md:mb-17 mb-10 flex flex-col items-center justify-center text-center'>
                        <SectionTitle title='Properties' caption='We Provide The Best Property You Like'/>
                    </div>
                    <div className='grid grid-cols-3 gap-9'>
                        <PropertiesBox/>
                        <PropertiesBox/>
                        <PropertiesBox/>
                    </div>
            </div>        
        </>
    )
}