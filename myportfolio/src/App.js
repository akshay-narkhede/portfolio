import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Work2 from "./components/Work2";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
   <div>
      <Navbar />
      <Home/>
      <About />
      <Experience/>
{/*<Work/>*/}
      <Work2/>
      <Footer/>
    </div>
  );
}

export default App;