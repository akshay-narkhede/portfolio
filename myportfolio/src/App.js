import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Work_ from "./components/Work_";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
//import Note from "./components/Note";
import Skills from "./components/Skills";
import homeGif from './assets/home.gif'



function App() {
  return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Experience/>
            <Skills/>
            <Work_/>
            <Contact/>
            <Footer/>
          </div>
  );
}

export default App;