import './index.css'
import Header from './Components/Home/Header/Header.jsx'
import HeaderBanner from './Components/Home/Header/HeaderBanner.jsx'
import Featured from './Components/Home/Main/Featured/Featured.jsx'
import VideoView from './Components/Home/Main/VideoView/VideoView.jsx'
import BestDeal from './Components/Home/Main/BestDeal/BestDeal.jsx'
import Properties from './Components/Home/Main/Properties/Properties.jsx'
import ContactUs from './Components/Home/Main/contactus/ContactUs.jsx'
import Footer from './Components/Home/Footer/Footer.jsx'


export default function App() {

  return (
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
