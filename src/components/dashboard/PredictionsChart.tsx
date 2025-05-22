
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "1", thisWeek: 4000, lastWeek: 2400 },
  { name: "2", thisWeek: 3000, lastWeek: 1398 },
  { name: "3", thisWeek: 2000, lastWeek: 9800 },
  { name: "4", thisWeek: 2780, lastWeek: 3908 },
  { name: "5", thisWeek: 1890, lastWeek: 4800 },
  { name: "6", thisWeek: 2390, lastWeek: 3800 },
  { name: "7", thisWeek: 3490, lastWeek: 4300 },
];

export function PredictionsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="thisWeek" 
              stroke="#1DA1F2" 
              fill="#1DA1F2" 
              fillOpacity={0.1} 
            />
            <Area 
              type="monotone" 
              dataKey="lastWeek" 
              stroke="#34C759" 
              fill="#34C759" 
              fillOpacity={0.1} 
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-gray-600">This Week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-sm text-gray-600">Last Week</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-xs text-gray-600">
              3,004 people
            </div>
            <div className="text-xs text-gray-600">
              4,504 people
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
