import './App.css';
import Companies from './Components/Companies/Companies';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Companies></Companies>
      <Services></Services>
    </div>
  );
}

export default App;
