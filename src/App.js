// src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Models from './pages/Models';
import TryOn from './pages/TryOn';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/models" element={<Models />} />
        <Route path="/try-on" element={<TryOn />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
