import MyMap from '../../Components/GoogleMap/MyMap.jsx'



export default function ContactUsSection(){
    return(
        <>
            <div className="container mx-auto px-4 xl:px-20">
                <div className='my-15 lg:my-25'>
                    
                    <div className='rounded-[0.8rem] overflow-hidden'>
                        <MyMap/>
                    </div>
                </div>
            </div>      
        </>
    )
}