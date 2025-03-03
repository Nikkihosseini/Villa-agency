import './index.css'
import Home from './Components/Home/Home.jsx'
import { BrowserRouter as Router , Routes , Route } from 'react-router'


export default function App() {

  return (
    <>
      <Router>
        <Home/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<div className='flex items-center justify-center mt-30 font-bold'>Page Not Found</div>} />
        </Routes>
      </Router>
    </>
  )
}
