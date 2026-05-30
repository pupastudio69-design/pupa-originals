import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp({ onSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
        uid: user.uid
      });

      setMessage('✅ Sign up successful! Welcome, ' + name);
      
      setTimeout(() => {
        onSignUp();
      }, 1500);

    } catch (error) {
      setMessage('❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'radial-gradient(ellipse at center, #0d3b23 0%, #041b11 50%, #000 100%)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl text-pupa-gold tracking-wider">PUPA</h1>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-emerald-500/70 mt-2">
            Premium African Cinema
          </p>
        </div>

        {/* Form */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-emerald-900/30">
          <h2 className="font-display text-2xl text-pupa-white mb-6 text-center">Create Account</h2>
          
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-black/50 border border-emerald-900/50 rounded-lg px-4 py-3 text-pupa-white placeholder-emerald-700/50 focus:outline-none focus:border-pupa-gold/50 transition-colors font-body"
            />
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/50 border border-emerald-900/50 rounded-lg px-4 py-3 text-pupa-white placeholder-emerald-700/50 focus:outline-none focus:border-pupa-gold/50 transition-colors font-body"
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black/50 border border-emerald-900/50 rounded-lg px-4 py-3 text-pupa-white placeholder-emerald-700/50 focus:outline-none focus:border-pupa-gold/50 transition-colors font-body"
            />
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white font-body font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-center text-sm font-body ${message.includes('✅') ? 'text-emerald-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </div>

        <p className="text-center mt-6 text-emerald-700/50 text-xs font-body">
          Already have an account? Sign In
        </p>
      </div>
    </div>
  );
}