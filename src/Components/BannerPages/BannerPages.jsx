
import { Link } from "react-router"

export default function BannerPages(props){
    return(
        <>
            <div className="relative w-full h-full">
                <img className='w-full bg-contain h-[303px] bg-center bg-no-repeat object-cover' src="./public/images/image/page-heading-bg/page-heading-bg.jpg" alt="page-heading-bg"/>
                <div className="container mx-auto px-4 xl:px-2 absolute top-[6rem] sm:top-[5rem] left-0 right-0">
                    <div className="flex flex-col items-center justify-center mx-auto text-white uppercase">
                    <div className='bg-white text-zinc-950  font-semibold px-2 py-1 ma:px-4 ma:py-2 mb-8 text-base md:text-lg'>
                        <span className="mr-1.5">
                            <Link to='/'>Home</Link>
                        </span>
                        <span className="slash">{props.pageName}</span>
                    </div>
                    <h2 className="font-bold line-clamp-1 text-3xl sm:text-5xl">{props.pageName}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}