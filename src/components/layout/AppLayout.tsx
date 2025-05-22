import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Collapsible sidebar */}
      <Sidebar isOpen={isSidebarOpen} />
      
      {/* Main content area with fixed header */}
      <div className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'ml-[200px]' : 'ml-0'}`}>
        {/* Static header */}
        <Header pageTitle={pageTitle} onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        {/* Content area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
