
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PandemicStatCardProps {
  value: string;
  label: string;
  color: string;
  icon?: React.ReactNode;
  className?: string;
}

export function PandemicStatCard({ value, label, color, icon, className }: PandemicStatCardProps) {
  return (
    <Card className={cn("p-4", className)}>
      {icon && (
        <div className={cn("mb-2", color)}>
          {icon}
        </div>
      )}
      <div className="text-xl font-bold">{value}</div>
      <div className={cn("text-xs font-medium mt-1", color)}>{label}</div>
    </Card>
  );
}
