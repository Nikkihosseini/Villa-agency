import '../../index.css'

export default function InfoBox(props){
    return(
        <>
            <div className='relative bg-red-50 rounded-lg w-[270px] p-7'>
                <span className='absolute top-[-20px] right-[-20px] bg-red-500 block w-12 h-12 rounded-full'></span>
                <div className='flex items-center justify-center gap-x-6'>
                    <h3 className='text-red-500 font-bold text-5xl'>{props.number}</h3>
                    <span className='font-bold text-lg text-left max-w-30 line-clamp-2'>{props.text}</span>
                </div>
            </div>
        </>
    )
}