import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import Pandemics from "./pages/Pandemics";
import Statistics from "./pages/Statistics";
import Predictions from "./pages/Predictions";
import Hospitals from "./pages/Hospitals";
import Vaccinations from "./pages/Vaccinations";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import { UserProvider } from "./contexts/UserContext";
import { AdminProvider } from "./contexts/AdminContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route 
            path="*" 
            element={
              <ThemeProvider>
                <UserProvider>
                  <AdminProvider>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/pandemics" element={<Pandemics />} />
                      <Route path="/statistics" element={<Statistics />} />
                      <Route path="/predictions" element={<Predictions />} />
                      <Route path="/hospitals" element={<Hospitals />} />
                      <Route path="/vaccinations" element={<Vaccinations />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </AdminProvider>
                </UserProvider>
              </ThemeProvider>
            } 
          />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
