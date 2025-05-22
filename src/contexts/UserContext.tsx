
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  email: string | null;
  isAuthenticated: boolean;
}

interface UserContextType {
  user: UserData;
  updateEmail: (email: string) => void;
  signOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { email: null, isAuthenticated: true };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const updateEmail = (email: string) => {
    setUser(prev => ({ ...prev, email }));
  };

  const signOut = () => {
    setUser({ email: null, isAuthenticated: false });
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ user, updateEmail, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
