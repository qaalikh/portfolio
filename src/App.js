import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
          <Navbar/>
          <Home/>
          <About/> 
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
