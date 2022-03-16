import './App.css';
import About from './Components/About/About';
import Classroom from './Components/Classroom/Classroom';
import Companies from './Components/Companies/Companies';
import Features from './Components/Features/Features';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Companies></Companies>
      <Services></Services>
      <About></About>
      <Classroom></Classroom>
      <Features></Features>
    </div>
  );
}

export default App;
