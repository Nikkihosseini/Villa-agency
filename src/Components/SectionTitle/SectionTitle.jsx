import '../../index.css'



export default function SectionTitle(props){
    return(
        <>
            <h4 className='line-before text-red-500 relative font-bold uppercase ml-2.5 mb-4'>{props.title}</h4>
            <h3 className='font-bold text-2xl md:text-4xl  md:leading-15 w-[210px] md:w-[350px] 2xl:w-[400px]'>{props.caption}
            </h3>
        </>
    )
}