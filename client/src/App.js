import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Projects from "./Projects";



function App() {
    return <div className="App">
      <Navbar/>
      <div className="m-4">
        <AboutMe/>
        <Projects/>
        </div>
    </div>;
}

export default App;
