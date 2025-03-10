import Header from '../../Header/Header.jsx'
import BannerPages from '../../BannerPages/BannerPages.jsx'
import PropertiesWrapper from './PropertiesWrapper.jsx'

export default function Properties(){
    return(
        <>
            <Header/>
            <BannerPages pageName='Properties'/>
            <PropertiesWrapper/>
        </>
    )
}