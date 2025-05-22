
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Microscope, 
  BarChart, 
  Hospital, 
  Syringe, 
  Activity, 
  ArrowRight, 
  Globe 
} from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="bg-primary p-1 rounded-md">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold">PandemicNet</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-500 hover:text-gray-700">
                Sign in
              </Link>
              <Button asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Global Pandemic Response System
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Monitor outbreaks, track hospital resources, and coordinate vaccination efforts with our comprehensive dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to="/login">Get Access</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/login" className="flex items-center">
                    Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a22bbcbc-500f-49d4-a572-6297d9f9fe24.png" 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Key Features
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive tools to manage pandemic response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Statistics</h3>
              <p className="text-gray-600">
                Track infection rates, recoveries, and mortality statistics with real-time updates from around the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Hospital className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hospital Resources</h3>
              <p className="text-gray-600">
                Monitor hospital capacity, equipment inventory, and patient flow to optimize healthcare resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Syringe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vaccination Tracking</h3>
              <p className="text-gray-600">
                Track vaccination progress, manage distribution, and identify areas in need of additional resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Use AI-powered models to predict outbreak patterns and prepare response strategies in advance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Coordination</h3>
              <p className="text-gray-600">
                Connect healthcare providers, governments, and NGOs to facilitate global pandemic response efforts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-blue-100 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pandemic Database</h3>
              <p className="text-gray-600">
                Access comprehensive information on current and historical pandemics for better planning and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to strengthen your pandemic response?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join healthcare organizations worldwide using PandemicNet to save lives and improve outcomes.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to="/login">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center">
                <div className="bg-white p-1 rounded-md">
                  <Microscope className="h-5 w-5 text-primary" />
                </div>
                <span className="ml-2 text-lg font-bold">PandemicNet</span>
              </div>
              <p className="mt-4 text-gray-400">
                Global pandemic response platform for healthcare professionals and policy makers.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Statistics</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Predictions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">API Reference</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Research</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Support</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Partners</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Media</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} PandemicNet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
