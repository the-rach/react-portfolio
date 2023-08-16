import './App.css';
// import { Projects } from './pages/Projects';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
  
          <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>

          <Footer/>
      </Router>
    </div>
  );
}

export default App;
