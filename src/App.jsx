import './index.css'
import React from 'react'
import Home from './Components/Home/Home.jsx'
import Properties from './Components/Properties/Properties.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router'


export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='*' element={<div className='flex items-center justify-center mt-30 font-bold'>Page Not Found</div>} />
        </Routes>
      </Router>
    </>
  )
}
