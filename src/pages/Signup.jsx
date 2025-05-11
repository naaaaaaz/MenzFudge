// src/pages/Signup.jsx
import { useState } from 'react';
import { auth, googleProvider } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signupWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      alert("Signed up successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Create Account</h2>
      <input className="w-full p-2 mb-2 bg-gray-800 text-white rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-4 bg-gray-800 text-white rounded" placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button className="w-full bg-green-600 py-2 rounded mb-2" onClick={signupWithEmail}>Sign Up</button>
      <button className="w-full bg-blue-600 py-2 rounded" onClick={signupWithGoogle}>Sign Up with Google</button>
    </div>
  );
};

export default Signup;
