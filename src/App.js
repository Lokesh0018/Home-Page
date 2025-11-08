import './App.css';
import Navigation from './Nav/Navigation';
import Hero from './Hero/Hero';
import AboutTeam from './About/AboutTeam';
import AboutUs from './About/AboutUs';
import Services from './Services/Services';
import FilmProduction from './Services/FilmProduction';
import Branding from './Services/Branding';
import ArtCuration from './Services/ArtCuration';
import Porotofolio from './Portofolio/Porotofolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Contact />
    </div>
  );
}

export default App;
