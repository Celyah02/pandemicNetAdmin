
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface EmergencyContactCardProps {
  icon: ReactNode;
  title: string;
  contact: string;
  status: string;
}

export function EmergencyContactCard({ icon, title, contact, status }: EmergencyContactCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-blue-100 text-blue-500 p-1.5 rounded-md">
          {icon}
        </div>
        <div className="text-sm font-medium">{title}</div>
      </div>
      <div className="text-base font-bold">{contact}</div>
      <div className="mt-1 text-xs">
        <span className="inline-flex items-center">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
          {status === "active" ? "Currently active" : status}
        </span>
      </div>
    </Card>
  );
}
