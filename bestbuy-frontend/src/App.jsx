import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DashboardPage from './components/Dashboard/DashboardPage'

import 'react-multi-carousel/lib/styles.css';
import Slider from './components/Dashboard/Slider/Slider'

function App() {
  return (
    < Router>
     <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/'  element={ <DashboardPage/>}/>
      <Route path='/slider' element={<Slider/>}/>
     </Routes>
    </Router>

  )
}

export default App