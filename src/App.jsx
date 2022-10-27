import { useState } from 'react'
import About from './components/About'
import Chat from './components/Chat'
import Contact_me from './components/Contact_me'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience  from './components/Experience'
import Scroll from './components/Scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar />
        <Chat />
        <Scroll/>
        <About />
        <Projects />
        <Experience />
        <Contact_me />  
    </div>
  )
}

export default App
