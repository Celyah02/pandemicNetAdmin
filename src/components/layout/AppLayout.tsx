
import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Static sidebar */}
      <Sidebar />
      
      {/* Main content area with fixed header */}
      <div className="flex flex-col flex-1 ml-[200px] min-h-screen">
        {/* Static header */}
        <Header pageTitle={pageTitle} />
        
        {/* Content area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
