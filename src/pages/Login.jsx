// src/pages/Login.jsx
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Logged in!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="w-full p-2 mb-2 bg-gray-800 text-white rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button className="w-full bg-blue-600 py-2 rounded" onClick={login}>Login</button>
    </div>
  );
};

export default Login;
