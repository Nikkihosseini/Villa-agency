import './index.css'
import React from 'react'
import Home from './Pages/Home/Home.jsx'
import Properties from './Pages/Properties/Properties.jsx'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router'


export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/PropertyDetails' element={<PropertyDetails/>} />
          <Route path='*' element={<div className='flex items-center justify-center mt-30 font-bold'>Page Not Found</div>} />
        </Routes>
      </Router>
    </>
  )
}

