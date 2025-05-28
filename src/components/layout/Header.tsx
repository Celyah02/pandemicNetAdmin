import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, ChevronDown, Menu } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";

interface HeaderProps {
  pageTitle?: string;
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export function Header({ pageTitle, onMenuClick, isSidebarOpen }: HeaderProps) {
  const location = useLocation();
  const { admin } = useAdmin();
  
  // Determine title based on current path if not explicitly provided
  const getTitle = () => {
    if (pageTitle) return pageTitle;
    
    const path = location.pathname;
    if (path === "/") return "Dashboard";
    return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
  };

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-10 w-full">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </Button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{getTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search here..."
            className="w-[260px] pl-9 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 border-gray-200 dark:border-gray-700">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-[10px] text-white">🇷🇼</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Rwanda(RW)</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Rwanda(RW)</DropdownMenuItem>
            <DropdownMenuItem>Kenya(KE)</DropdownMenuItem>
            <DropdownMenuItem>Uganda(UG)</DropdownMenuItem>
            <DropdownMenuItem>Tanzania(TZ)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="relative">
          <Button variant="ghost" className="relative" size="icon">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
        </div>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-700">
            <AvatarImage src={admin.profileImage} />
            <AvatarFallback>{admin.firstName[0]}{admin.lastName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 dark:text-white">{`${admin.firstName} ${admin.lastName}`}</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
