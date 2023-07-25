import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DashboardPage from './components/Dashboard/DashboardPage'
import Slider from './components/Dashboard/Slider/Slider'
import Register from './components/Register/Register'

function App() {
  return (
    < Router>
     <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/'  element={ <DashboardPage/>}/>
      <Route path='/slider' element={<Slider/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
    </Router>

  )
}

export default App