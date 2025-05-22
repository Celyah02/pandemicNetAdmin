
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Microscope,
  BarChart,
  Activity,
  Hospital,
  Syringe,
  Settings,
  LogOut
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Pandemics",
    icon: Microscope,
    href: "/pandemics",
  },
  {
    label: "Statistics",
    icon: BarChart,
    href: "/statistics",
  },
  {
    label: "Predictions",
    icon: Activity,
    href: "/predictions",
  },
  {
    label: "Hospitals",
    icon: Hospital,
    href: "/hospitals",
  },
  {
    label: "Vaccinations",
    icon: Syringe,
    href: "/vaccinations",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { signOut } = useUser();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <div className="w-[200px] min-w-[200px] h-screen bg-white shadow-md flex flex-col fixed left-0 top-0 z-20">
      <div className="p-4 flex items-center mb-4">
        <div className="bg-blue-500 h-8 w-8 rounded flex items-center justify-center mr-2">
          <Microscope className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-gray-800">PandemicNet</span>
      </div>
      <div className="flex-1 px-3 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
              currentPath === item.href 
                ? "bg-blue-500 text-white" 
                : "text-blue-500 hover:bg-blue-50"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="p-3 mt-auto">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full justify-start",
            "text-blue-500 hover:bg-blue-50"
          )}
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );
}
