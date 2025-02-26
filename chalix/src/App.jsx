import './App.css'
import './reset.css'

import Header from './components/header'
import Intro from './components/intro'
import Footer from './components/Footer'
import Expertise from './components/Expertise'

function App() {

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Expertise />
        <Expertise />
      </main>
      <Footer />
    </>
  )
}

export default App
