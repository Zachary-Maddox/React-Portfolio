import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Projects from "./Projects";

import { FaBeer } from 'react-icons/fa';

function App() {
    return <div className="App">
      <Navbar/>
        <AboutMe/>
        <Projects/>
    </div>;
}

export default App;
