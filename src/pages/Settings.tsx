
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const { theme, toggleTheme, language, setLanguage } = useTheme();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AppLayout pageTitle="Settings">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-gray-200 dark:border-gray-700">
              <AvatarImage src="/lovable-uploads/e4a554a6-52de-451c-b319-203e2bc527d2.png" alt="Alexis Rosalez" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-lg">Alexis Rosalez</h2>
              <p className="text-gray-500 text-sm">alexisrosalez@gmail.com</p>
            </div>
          </div>
          <Button>Edit</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Your first name" />
          </div>
          <div className="space-y-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Your last name" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Label htmlFor="gender">Gender</Label>
            <Select defaultValue="male">
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="rw">
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rw">Rwanda</SelectItem>
                <SelectItem value="ke">Kenya</SelectItem>
                <SelectItem value="ug">Uganda</SelectItem>
                <SelectItem value="tz">Tanzania</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Label htmlFor="language">Language</Label>
            <Select 
              defaultValue={language}
              onValueChange={(value) => setLanguage(value as "en" | "fr" | "sw")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="sw">Kiswahili</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label htmlFor="timezone">Time Zone</Label>
            <Select defaultValue="cat">
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">My Email Address</h3>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Input value="alexisrosalez@gmail.com" readOnly className="bg-gray-50 dark:bg-gray-800" />
              <p className="text-xs text-gray-500 mt-1">1 month ago</p>
            </div>
            <Button variant="outline">Change email address</Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Appearance</h3>
          <div className="flex gap-4">
            <Button 
              variant={theme === 'light' ? "default" : "outline"} 
              className={theme === 'light' ? "bg-blue-500" : ""}
              onClick={() => {if (theme !== 'light') toggleTheme()}}
            >
              Light Mode
            </Button>
            <Button 
              variant={theme === 'dark' ? "default" : "outline"}
              className={theme === 'dark' ? "bg-blue-500" : ""}
              onClick={() => {if (theme !== 'dark') toggleTheme()}}
            >
              Dark Mode
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Password and authentication</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div></div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Retype New Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Notifications & Alert</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="feedback-emails">Feedback emails</Label>
              <Switch id="feedback-emails" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="emergency-alerts">Emergency alerts</Label>
              <Switch id="emergency-alerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="vaccination-progress">Vaccination Progress</Label>
              <Switch id="vaccination-progress" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="support-emails">Support emails</Label>
              <Switch id="support-emails" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="lockdown-advisory">Lockdown Advisory</Label>
              <Switch id="lockdown-advisory" defaultChecked />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>
        </div>
      </div>
    </AppLayout>
  );
}
