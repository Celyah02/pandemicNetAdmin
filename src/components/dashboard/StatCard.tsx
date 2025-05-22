
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  icon: ReactNode;
  iconColor: string;
  iconBgColor: string;
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
    text: string;
  };
}

export function StatCard({ icon, iconColor, iconBgColor, title, value, change }: StatCardProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-4 flex flex-col">
      <div className="flex items-start justify-between">
        <div className={cn("p-2 rounded-md", iconBgColor)}>
          <div className={cn("h-5 w-5", iconColor)}>{icon}</div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="flex items-center gap-1 mt-1">
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <div className="flex items-center mt-1">
          {change.isPositive ? (
            <ArrowUp className="h-3 w-3 text-blue-500" />
          ) : (
            <ArrowDown className="h-3 w-3 text-green-500" />
          )}
          <span className="text-xs text-blue-500">
            {change.value} {change.text}
          </span>
        </div>
      </div>
    </div>
  );
}
