
import Header from "../../Components/Header/Header.jsx";
import HeaderBanner from "../Home/Main/HeaderBanner/HeaderBanner.jsx";
import Featured from "./Main/Featured/Featured.jsx";
import VideoView from "./Main/VideoView/VideoView.jsx";
import BestDeal from "./Main/BestDeal/BestDeal.jsx";
import Properties from "./Main/Propertie/Propertie.jsx";
import ContactUsHome from "../../Components/ContactUs/ContactUsHome.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

 

export default function Home(){
    return(
        <>
            <Header/>
            <HeaderBanner/>
            <Featured/>
            <VideoView/>
            <BestDeal/>
            <Properties/>
            <ContactUsHome/>
            <Footer/>
        </>
    )
}