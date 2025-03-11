import Header from '../../Header/Header.jsx'
import BannerPages from '../../BannerPages/BannerPages.jsx'
import PropertiesWrapper from './PropertiesWrapper.jsx'
import Footer from "../../Footer/Footer"

export default function Properties(){
    return(
        <>
            <Header/>
            <BannerPages pageName='Properties'/>
            <PropertiesWrapper/>
            <Footer/>
        </>
    )
}