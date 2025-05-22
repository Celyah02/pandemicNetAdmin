import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";
import { Microscope, ChevronRight, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This is a mock login - in a real app this would connect to an auth service
    if (email && password) {
      // Store the authenticated state in localStorage
      const userData = { email, isAuthenticated: true };
      localStorage.setItem('user', JSON.stringify(userData));
      
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center">
            <div className="bg-primary p-2 rounded-md">
              <Microscope className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
            Sign in to PandemicNet
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Track pandemic data and make informed decisions
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-primary hover:text-primary/80">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(!!checked)} />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/landing" className="font-semibold text-primary hover:text-primary/80">
              Learn more
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Side - Image/Info */}
      <div className="hidden md:flex md:flex-1 bg-blue-50">
        <div className="w-full h-full flex flex-col justify-center items-center p-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Global Pandemic Response System
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Monitor outbreaks, track hospital resources, and coordinate vaccination efforts with our comprehensive dashboard.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700">Real-time pandemic tracking</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700">Healthcare resource management</span>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-full mr-3">
                  <ChevronRight className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-700">Vaccination tracking and planning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
