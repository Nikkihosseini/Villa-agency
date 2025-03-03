import './index.css'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router'


export default function App() {

  return (
    <>
      <Home/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Properties' element={<Properties/>} />
          <Route path='/PropertyDetails' element={<PropertyDetails/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />
        </Routes>
      </Router>
    </>
  )
}
