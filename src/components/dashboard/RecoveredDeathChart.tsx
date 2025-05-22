
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", risk: 110, dead: 120, recovered: 140 },
  { month: "Feb", risk: 130, dead: 140, recovered: 160 },
  { month: "Mar", risk: 170, dead: 150, recovered: 180 },
  { month: "Apr", risk: 180, dead: 170, recovered: 190 },
  { month: "May", risk: 200, dead: 180, recovered: 220 },
  { month: "Jun", risk: 210, dead: 190, recovered: 230 },
  { month: "Jul", risk: 220, dead: 200, recovered: 240 },
  { month: "Aug", risk: 200, dead: 220, recovered: 230 },
  { month: "Sep", risk: 220, dead: 210, recovered: 250 },
  { month: "Oct", risk: 230, dead: 220, recovered: 260 },
  { month: "Nov", risk: 250, dead: 230, recovered: 180 },
  { month: "Dec", risk: 220, dead: 200, recovered: 170 },
];

export function RecoveredDeathChart() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-0">
        <CardTitle>Recovered & Death Graph</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px] pt-4">
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="risk" 
              stroke="#1E88E5" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="dead" 
              stroke="#E53935" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="recovered" 
              stroke="#43A047" 
              strokeWidth={2} 
              dot={false} 
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-8 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Dead</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Recovered</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
