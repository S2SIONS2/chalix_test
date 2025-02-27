import './App.css'
import './reset.css'

import Header from './components/header'
import Intro from './components/intro'
import Footer from './components/Footer'
import Expertise from './components/Expertise'
import News from './components/News'
import Topbutton from './components/Topbutton'

function App() {
  return (
    <>
      <Header />
      <Topbutton />
      <main>
        <Intro />
        <Expertise />
        <News />
      </main>
      <Footer />
    </>
  )
}

export default App
