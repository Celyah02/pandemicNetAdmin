import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { useAdmin } from "@/contexts/AdminContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Plus, Trash2, Upload } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

interface AdminEmail {
  email: string;
  lastUpdated: string;
}

export default function Settings() {
  const { theme, toggleTheme, language, setLanguage } = useTheme();
  const { admin, updateAdmin } = useAdmin();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Profile state
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(admin.firstName);
  const [lastName, setLastName] = useState(admin.lastName);
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("rw");
  const [timezone, setTimezone] = useState("cat");

  // Admin emails state
  const [adminEmails, setAdminEmails] = useState<AdminEmail[]>([
    { email: admin.email, lastUpdated: "1 month ago" }
  ]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [showAddEmail, setShowAddEmail] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        updateAdmin({ profileImage: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    updateAdmin({
      firstName,
      lastName,
      email: adminEmails[0].email
    });
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleAddAdminEmail = () => {
    if (newAdminEmail && !adminEmails.some(admin => admin.email === newAdminEmail)) {
      const newEmails = [
        { email: newAdminEmail, lastUpdated: "Just now" },
        ...adminEmails.slice(1)
      ];
      setAdminEmails(newEmails);
      updateAdmin({ email: newAdminEmail });
      setNewAdminEmail("");
      setShowAddEmail(false);
      toast.success("Admin email added successfully!");
    } else {
      toast.error("Please enter a valid and unique email address");
    }
  };

  const handleRemoveAdminEmail = (emailToRemove: string) => {
    setAdminEmails(adminEmails.filter(admin => admin.email !== emailToRemove));
    toast.success("Admin email removed successfully!");
  };

  return (
    <AppLayout pageTitle="Settings">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-gray-200 dark:border-gray-700">
                <AvatarImage src={admin.profileImage} alt={`${firstName} ${lastName}`} />
                <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-0 right-0 bg-white rounded-full shadow-lg"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4" />
                </Button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div>
              <h2 className="font-semibold text-lg">{`${firstName} ${lastName}`}</h2>
              <p className="text-gray-500 text-sm">{adminEmails[0]?.email}</p>
            </div>
          </div>
          <Button onClick={() => {
            if (isEditing) {
              handleSaveProfile();
            } else {
              setIsEditing(true);
            }
          }}>
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="space-y-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <Label htmlFor="gender">Gender</Label>
            <Select 
              value={gender} 
              onValueChange={setGender}
              disabled={!isEditing}
            >
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
            <Select 
              value={country}
              onValueChange={setCountry}
              disabled={!isEditing}
            >
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
              value={language}
              onValueChange={(value) => setLanguage(value as "en" | "fr" | "sw")}
              disabled={!isEditing}
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
            <Select 
              value={timezone}
              onValueChange={setTimezone}
              disabled={!isEditing}
            >
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Admin Email Addresses</h3>
            <Button 
              variant="outline" 
              onClick={() => setShowAddEmail(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Email
            </Button>
          </div>
          
          {showAddEmail && (
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-1">
                <Input
                  value={newAdminEmail}
                  onChange={(e) => setNewAdminEmail(e.target.value)}
                  placeholder="Enter new admin email"
                  type="email"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAddAdminEmail}>Add</Button>
                <Button variant="outline" onClick={() => {
                  setShowAddEmail(false);
                  setNewAdminEmail("");
                }}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {adminEmails.map((admin) => (
              <div key={admin.email} className="flex items-start gap-4">
                <div className="flex-1">
                  <Input value={admin.email} readOnly className="bg-gray-50 dark:bg-gray-800" />
                  <p className="text-xs text-gray-500 mt-1">{admin.lastUpdated}</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleRemoveAdminEmail(admin.email)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
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
