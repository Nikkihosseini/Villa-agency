import Header from '../../Components/Header/Header.jsx'
import BannerPages from '../../Components/BannerPages/BannerPages.jsx'
import PropertiesWrapper from './PropertiesWrapper.jsx'
import Footer from "../../Components/Footer/Footer"

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