
import { Link } from "react-router"

export default function BannerPages(props){
    return(
        <>
            <div className="relative hidden md:flex w-full">
                <img className='w-full bg-cover bg-[center_bottom] bg-no-repeat' src="./public/images/image/page-heading-bg/page-heading-bg.jpg" alt="page-heading-bg"/>
                <div className="container mx-auto px-4 xl:px-2 absolute top-[5rem]">
                    <div className="flex flex-col items-center justify-center text-white mx-auto uppercase">
                    <div className="bg-white text-zinc-950 font-semibold px-4 py-2 mb-8 text-lg">
                        <span className="mr-1.5">
                            <Link to='/'>Home</Link>
                        </span>
                        <span className="slash">{props.pageName}</span>
                    </div>
                    <h2 className="font-bold line-clamp-1 text-5xl">{props.pageName}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}