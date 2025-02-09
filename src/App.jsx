import './index.css'
import Header from './Components/Home/Header/Header.jsx'
import HeaderBanner from './Components/Home/Header/HeaderBanner.jsx'
import Featured from './Components/Home/Featured/Featured.jsx'
import VideoView from './Components/Home/VideoView/VideoView.jsx'
import BestDeal from './Components/Home/BestDeal/BestDeal.jsx'

export default function App() {

  return (
    <>
     <Header/>
     <HeaderBanner/>
     <Featured/>
     <VideoView/>
     <BestDeal/>
    </>
  )
}
