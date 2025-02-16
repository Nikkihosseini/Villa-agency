import './index.css'
import Header from './Components/Home/Header/Header.jsx'
import HeaderBanner from './Components/Home/Header/HeaderBanner.jsx'
import Featured from './Components/Home/Featured/Featured.jsx'
import VideoView from './Components/Home/VideoView/VideoView.jsx'
import BestDeal from './Components/Home/BestDeal/BestDeal.jsx'
import Properties from './Components/Home/Properties/Properties.jsx'
import ContactUs from './Components/Home/contactus/ContactUs.jsx'


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
    </>
  )
}
