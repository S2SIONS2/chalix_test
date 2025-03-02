import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Presentation from './pages/Presentation.jsx'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import UpdateBoard from './pages/UpdateBoard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/presentaion' element={<Presentation />} />
        <Route path='/updateboard' element={<UpdateBoard />} />
      </Routes>
    <Footer />
  </BrowserRouter>
)
