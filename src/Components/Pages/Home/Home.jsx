
import Header from "../../Header/Header.jsx";
import HeaderBanner from "./Main/HeaderBanner/HeaderBanner.jsx";
import Featured from "./Main/Featured/Featured.jsx";
import VideoView from "./Main/VideoView/VideoView.jsx";
import BestDeal from "./Main/BestDeal/BestDeal.jsx";
import Properties from "./Main/Propertie/Propertie.jsx";
import ContactUs from "../../ContactUs/ContactUsHome.jsx";
import Footer from "../../Footer/Footer.jsx";

 

export default function Home(){
    return(
        <>
            <Header/>
            <HeaderBanner/>
            <Featured/>
            <VideoView/>
            <BestDeal/>
            <Properties/>
            <ContactUs/>
            <Footer/>
        </>
    )
}