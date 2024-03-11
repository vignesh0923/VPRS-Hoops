import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Founder from "./Founder/Founder";
import Home from "./Home/Home";
import Map from "./Map/Map";
import Navbar from "./Navbar/navbar";
import VisionMission from "./visionmission/Vision&mission";

function App() {
  return (
    <div >
      <Navbar />
      <Home/>
      <About/>
      <VisionMission/>
      <Founder/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
