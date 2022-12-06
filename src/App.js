import logo from './logo.svg';
import './App.css';
import './App.scss';
import Navbar from './Components/Navbar';
import Header from './Container/Header/Header';
import Speciality from './Container/Speciality/Speciality';
import Skills from './Container/Skills/Skills';
import Testimonial from './Container/Testimonial/Testimonial';
import Contact from './Container/Contact/Contact';
import Works from './Container/Works/Works';



const App = () => {
  return (
    <div className="App">
     

    <Navbar/> 
   {/* <Header/>  */}
   <Speciality/>
    <Works/> 
    
    
  <Skills/> 
   <Testimonial/>
   {/* <Contact/>    */}
  
    </div>
  );
}

export default App;
