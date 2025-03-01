import './App.css'
import './reset.css'

import Intro from './components/intro'
import Expertise from './components/Expertise'
import News from './components/News'
import Topbutton from './components/Topbutton'
import Performance from './components/Performance'

function App() {
  return (
    <>
      <Topbutton />
      <main>
        <Intro />
        <Expertise />
        <News />
        <Performance />
      </main>
    </>
  )
}

export default App
