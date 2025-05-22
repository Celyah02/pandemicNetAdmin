
import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SmallChartCardProps {
  title: string;
  value: string;
  change: string;
  type: "up" | "down" | "neutral";
  chartColor: string;
}

// Generate random chart data
const generateData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    value: Math.floor(Math.random() * 100) + 20,
  }));
};

export function SmallChartCard({
  title,
  value,
  change,
  type,
  chartColor,
}: SmallChartCardProps) {
  const data = generateData();
  
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">{title}</span>
          <div className="flex items-center gap-1">
            {type === "up" ? (
              <ArrowUp className="h-3 w-3 text-red-500" />
            ) : type === "down" ? (
              <ArrowDown className="h-3 w-3 text-green-500" />
            ) : null}
            <span className={`text-xs ${type === "up" ? "text-red-500" : type === "down" ? "text-green-500" : ""}`}>
              {change}
            </span>
          </div>
        </div>
        <div className="text-xl font-bold">{value}</div>
        <div className="h-[40px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`color${title.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColor}
                strokeWidth={2}
                fill={`url(#color${title.replace(/\s+/g, '')})`}
                dot={false}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
