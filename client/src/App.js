import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";



function App() {
    return <div className="App">
      <Navbar/>
      <div className="m-4">
        <AboutMe/>
        <Projects/>
        </div>
        <Footer/>
    </div>;
}

export default App;
