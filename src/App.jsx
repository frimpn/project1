import { useState } from 'react'
import './App.css'
import SignUp from './components/Login/SignUp'
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Header from './components/Header'
import Carousel from './components/Carousel/Carousel'

function App() {
  

  return (
    <>
  

        
        <AuthProvider>
          <Router>
            <Header />
           
          <Routes>
           <Route path='/'  element={<Carousel/>} />




          <Route path="/dashboard" element={<PrivateRoute><DashBoard/> </PrivateRoute>} />
          <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<SignUp />} />

     


     </Routes>


   


     </Router>
     </AuthProvider>
   
   
    </>
  )
}

export default App
