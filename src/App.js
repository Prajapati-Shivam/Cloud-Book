import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/notes/noteState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="mx-14 my-10">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' exact element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
