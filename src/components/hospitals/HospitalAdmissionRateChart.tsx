
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";

const data = [
  { month: 'Jan', rate: 30 },
  { month: 'Feb', rate: 40 },
  { month: 'Mar', rate: 25 },
  { month: 'Apr', rate: 60 },
  { month: 'May', rate: 45 },
  { month: 'Jun', rate: 35 },
  { month: 'Jul', rate: 70 },
  { month: 'Aug', rate: 55 },
  { month: 'Sep', rate: 65 },
  { month: 'Oct', rate: 50 },
  { month: 'Nov', rate: 75 },
  { month: 'Dec', rate: 80 }
];

const chartConfig = {
  rate: {
    label: "Admission Rate",
    color: "#4C6FFF"
  }
};

export function HospitalAdmissionRateChart() {
  return (
    <Card className="h-[350px]">
      <CardHeader className="pb-0">
        <CardTitle className="text-base font-medium">Monthly Patient Admission Rate</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-0">
        <ChartContainer config={chartConfig} className="h-full">
          {/* Wrap all children in a React Fragment to make it a single React element */}
          <>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 30, right: 30, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="month" 
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
                <Bar 
                  dataKey="rate" 
                  fill="#4C6FFF"
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={40}
                  name="rate"
                />
              </BarChart>
            </ResponsiveContainer>
            <ChartLegend content={<ChartLegendContent />} />
          </>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
