// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <h1 className="text-xl font-bold text-white">Ultimate T-Shirts</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/survey" className="hover:underline">Survey</Link>
        <Link to="/models" className="hover:underline">Models</Link>
        <Link to="/try-on" className="hover:underline">Try-On</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/signup" className="hover:underline">Signup</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
