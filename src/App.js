import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
