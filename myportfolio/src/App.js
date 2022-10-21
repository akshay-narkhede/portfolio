import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Work_ from "./components/Work_";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Note from "./components/Note";


function App() {
  return (
        <div>
            <Navbar />
            <Home/>
            <About />
            <Experience/>
            {/*<Work/>*/}
            <Work_/>
            <Contact/>
            <Note/>
            <Footer/>
          </div>
  );
}

export default App;