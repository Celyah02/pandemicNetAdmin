
import { Card } from "@/components/ui/card";
import { 
  Activity,
  ArrowRight, 
  BarChart3, 
  ChevronDown, 
  Syringe,
  Bed,
  PlusCircle,
  Repeat
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  icon: JSX.Element;
  iconBgColor: string;
  title: string;
  value: string;
  subtitle?: string;
}

const InsightCard = ({ icon, iconBgColor, title, value, subtitle }: InsightCardProps) => (
  <div className="flex gap-3 p-3 rounded-md hover:bg-gray-50">
    <div className={cn("p-2 rounded-md flex-shrink-0", iconBgColor)}>
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-lg font-semibold">{value}</p>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
    <ArrowRight className="ml-auto self-center h-4 w-4 text-gray-400" />
  </div>
);

export function InsightsCards() {
  const insights = [
    {
      icon: <Syringe className="h-4 w-4 text-white" />,
      iconBgColor: "bg-blue-500",
      title: "Vaccination Progress",
      value: "74%",
      subtitle: "Goal: 100%"
    },
    {
      icon: <Bed className="h-4 w-4 text-white" />,
      iconBgColor: "bg-green-500",
      title: "ICU Bed Occupancy",
      value: "67%",
      subtitle: "40 of 60 beds in use"
    },
    {
      icon: <Activity className="h-4 w-4 text-white" />,
      iconBgColor: "bg-blue-500",
      title: "Testing Rate",
      value: "2,345/day",
      subtitle: "Above the target"
    },
    {
      icon: <PlusCircle className="h-4 w-4 text-white" />,
      iconBgColor: "bg-indigo-500",
      title: "New Variant Cases",
      value: "127",
      subtitle: "Last 7 days"
    },
    {
      icon: <Repeat className="h-4 w-4 text-white" />,
      iconBgColor: "bg-green-500",
      title: "Recovery Rate",
      value: "92%",
      subtitle: ""
    }
  ];

  return (
    <div className="space-y-2">
      {insights.map((insight, index) => (
        <InsightCard key={index} {...insight} />
      ))}
    </div>
  );
}
