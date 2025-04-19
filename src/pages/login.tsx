import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Placeholder async function for future backend/database authentication
  const authenticateUser = async (email: string, password: string) => {
    // TODO: Replace this with a real API/database call
    // Example: const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    // const data = await response.json();
    // return data;
    return new Promise<{ success: boolean; message?: string }>((resolve) => {
      setTimeout(() => {
        // Simulate a successful login for demo purposes
        if (email === 'admin@example.com' && password === 'password123') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid credentials.' });
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Call the placeholder authentication function
    const result = await authenticateUser(email, password);
    if (result.success) {
      // TODO: Redirect to dashboard or home page after successful login
      alert('Logged in! (Demo)');
    } else {
      setError(result.message || 'Login failed.');
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 relative z-10 animate-fade-in">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{t('login')}</h2>
          <p className="text-gray-600 dark:text-gray-300">Welcome back! Please login to your account.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 text-xs font-semibold focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all text-lg"
          >
            {t('login')}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <span>Forgot your password?</span>
          <a href="#" className="ml-2 text-blue-600 dark:text-blue-400 hover:underline">Reset here</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
