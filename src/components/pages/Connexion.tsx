import * as React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface ConnexionProps {
  onNavigate?: (page: string) => void;
}

export default function Connexion({ onNavigate }: ConnexionProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        if (onNavigate) {
          onNavigate('admin');
        } else {
          window.location.href = '/admin';
        }
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [onNavigate]);

  // Correction : utiliser les types any pour éviter les erreurs de compilation liées à React.FormEvent et React.ChangeEvent
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion Admin</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input type="email" value={email} onChange={(e: any) => setEmail((e.target as HTMLInputElement).value)} required className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Mot de passe</label>
          <input type="password" value={password} onChange={(e: any) => setPassword((e.target as HTMLInputElement).value)} required className="w-full px-3 py-2 border rounded" />
        </div>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <button type="submit" className="w-full bg-red-700 text-white py-2 rounded" disabled={loading}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}
