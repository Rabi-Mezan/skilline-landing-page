import './App.css';
import About from './Components/About/About';
import Assestments from './Components/Assestments/Assestments';
import Classroom from './Components/Classroom/Classroom';
import Companies from './Components/Companies/Companies';
import Discussion from './Components/Discussion/Discussion';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Intregations from './Components/Intregations/Intregations';
import Management from './Components/Management/Management';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Tools from './Components/Tools/Tools';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Companies></Companies>
      <Services></Services>
      <About></About>
      <Classroom></Classroom>
      <Features></Features>
      <Tools></Tools>
      <Assestments></Assestments>
      <Management></Management>
      <Discussion></Discussion>
      <Intregations></Intregations>
      <Testimonials></Testimonials>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
