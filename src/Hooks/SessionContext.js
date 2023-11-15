import { useState } from 'react';

const ReactSession = () => {
  // Use session storage to create session
  const [session, setSession] = useState({
    user: sessionStorage.getItem('user') || null,
    token: sessionStorage.getItem('token') || null
  });

  // Function to update session
  const updateSession = (newUser, newToken) => {
    setSession({
      user: newUser,
      token: newToken
    });
    sessionStorage.setItem('user', JSON.stringify(newUser));
    sessionStorage.setItem('token', JSON.stringify(newToken));
  };

  // Function to clear session
  const clearSession = () => {
    setSession({
      user: null,
      token: null
    });
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };

  // Return functions and session state
  return {
    session,
    updateSession,
    clearSession
  };
};

export default ReactSession;
