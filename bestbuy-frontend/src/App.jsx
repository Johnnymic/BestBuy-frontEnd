import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import DashboardPage from './components/Dashboard/DashboardPage'

function App() {
  return (
    < Router>
     <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/'  element={ <DashboardPage/>}/>
     </Routes>
    </Router>

  )
}

export default App