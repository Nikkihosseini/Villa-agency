import Header from '../../Components/Header/Header.jsx'
import BannerPages from '../../Components/BannerPages/BannerPages.jsx'
import ContactUsSection from '../ContactUs/ContactUsSection.jsx'
import Footer from "../../Components/Footer/Footer"


export default function ContactUs(){
    return(
        <>
            <Header/>
            <BannerPages pageName='Contact Us'/>
            <ContactUsSection/>
            <Footer/>
        </>
    )
}