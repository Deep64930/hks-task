import React from 'react'
import Content from './components/Content';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Finance from './pages/Finance';
import Planning from './pages/Planning';
import Footer from './pages/Footer';
import Report from './pages/Report';
import AdminPage from './pages/AdminPage';
import SignupPage from './pages/SignupPage';

const App = () => {

  const DynamicRoute =()=>{
    <Routes>
      <Route exact path='/' element={<AdminPage />} />
      <Route exact path='/finance' element={<Finance />} />
      <Route exact path='/planning' element={<Planning />} />
      <Route exact path='/report' element={<Report />} />
      <Route exact path='/sign' element={<SignupPage />} />
    </Routes>
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
      <DynamicRoute />
      <Footer />
    </BrowserRouter>
  )
}

export default App