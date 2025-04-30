import Header from '../../Components/Header/Header.jsx'
import BannerPages from '../../Components/BannerPages/BannerPages.jsx'
import SinglePpropertySection from '../PropertyDetails/SinglePpropertySection.jsx'
import Footer from "../../Components/Footer/Footer"


export default function PropertyDetails(){
    return(
        <>
            <Header/>
            <BannerPages pageName='Single Property'/>
            <SinglePpropertySection/>
            <Footer/>
        </>
    )
}