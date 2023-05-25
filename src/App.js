import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Art from './pages/Art';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailArt from './pages/DetailArt';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/lagringa" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art/:detailart" element={<DetailArt />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
