import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/notes/noteState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          {localStorage.getItem('token')?<Navbar />:<div className='text-2xl sm:text-3xl font-semibold text-center mt-5 w-full absolute top-0 z-10'>Welcome to Cloud Book!</div>}
          <div className="mx-4 sm:mx-14 mt-14 sm:mt-28 mb-5">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/signup' exact element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
