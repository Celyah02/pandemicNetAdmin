import React, { createContext, useContext, useState } from 'react';

interface AdminUser {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
}

interface AdminContextType {
  admin: AdminUser;
  updateAdmin: (newAdmin: Partial<AdminUser>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser>({
    firstName: 'Musifq',
    lastName: '',
    email: 'admin@example.com',
    profileImage: '/lovable-uploads/e4a554a6-52de-451c-b319-203e2bc527d2.png'
  });

  const updateAdmin = (newAdmin: Partial<AdminUser>) => {
    setAdmin(prev => ({ ...prev, ...newAdmin }));
  };

  return (
    <AdminContext.Provider value={{ admin, updateAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 