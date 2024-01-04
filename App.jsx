import {BrowserRouter } from 'react- router- dom';
import {About, Content, Experience, Feedback, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import viteLogo from '/vite.svg'
import './App.css'


  const App = () =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern, bg-cover bg-no repeat bg-center"> 
        <Navbar/>
        <hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedback/>
        <div className='relative z-0 '>
          <Content/>
          <StarsCanvas/>
        </div>
         </div>
      
    </BrowserRouter>
  )
}

export default App
