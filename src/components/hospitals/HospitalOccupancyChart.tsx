
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";

const data = [
  { week: 'W1', rate: 60 },
  { week: 'W2', rate: 65 },
  { week: 'W3', rate: 70 },
  { week: 'W4', rate: 80 },
  { week: 'W5', rate: 75 },
  { week: 'W6', rate: 65 },
  { week: 'W7', rate: 60 },
  { week: 'W8', rate: 70 },
  { week: 'W9', rate: 80 },
  { week: 'W10', rate: 85 },
  { week: 'W11', rate: 75 },
  { week: 'W12', rate: 70 }
];

const chartConfig = {
  rate: {
    label: "Occupancy Rate",
    color: "#4C6FFF"
  }
};

export function HospitalOccupancyChart() {
  return (
    <Card className="h-[350px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">Hospital Occupancy Rate Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-0">
        <ChartContainer config={chartConfig} className="h-full">
          {/* Wrap all children in a React Fragment to make it a single React element */}
          <>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="week" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#888' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#888' }}
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#4C6FFF"
                  strokeWidth={3}
                  dot={{ fill: "#4C6FFF", r: 4 }}
                  name="rate"
                />
              </LineChart>
            </ResponsiveContainer>
            <ChartLegend content={<ChartLegendContent />} />
          </>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
