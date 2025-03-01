import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Presentation from './pages/Presentation.jsx'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/presentaion' element={<Presentation />} />
      </Routes>
    <Footer />
  </BrowserRouter>
)
