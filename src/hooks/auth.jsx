import { createContext, useContext, useState, useEffect } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@awesomentes:user', JSON.stringify(user));
      localStorage.setItem('@awesomentes:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@awesomentes:token');
    localStorage.removeItem('@awesomentes:user');
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@awesomentes:token');
    const user = localStorage.getItem('@awesomentes:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
