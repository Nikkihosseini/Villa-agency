
import { Link } from "react-router"

export default function BannerPages(props){
    return(
        <>
            <div>
                <img src="./public/images/image/page-heading-bg/page-heading-bg.jpg" alt="page-heading-bg"/>
                <div>
                    <div>
                        <Link to='/'>Home</Link>
                        <span>{props.pageName}</span>
                    </div>
                    <h2>{props.pageName}</h2>
                </div>
            </div>
        </>
    )
}