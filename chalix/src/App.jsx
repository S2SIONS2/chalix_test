import './App.css'
import './reset.css'

import Header from './components/header'
import Intro from './components/intro'
import Footer from './components/Footer'
import Expertise from './components/Expertise'
import News from './components/News'
import Topbutton from './components/Topbutton'
import Performance from './components/Performance'

function App() {
  return (
    <>
      <Header />
      <Topbutton />
      <main>
        <Intro />
        <Expertise />
        <News />
        <Performance />
      </main>
      <Footer />
    </>
  )
}

export default App
