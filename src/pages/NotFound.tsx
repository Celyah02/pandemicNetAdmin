
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/layout/Sidebar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! This page doesn't exist
          </p>
          <p className="text-gray-500 mb-8 max-w-md">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild>
            <a href="/">Back to Dashboard</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
