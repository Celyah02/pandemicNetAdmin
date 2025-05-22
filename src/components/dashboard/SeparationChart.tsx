
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "1", value: 35, infected: 20, normal: 15 },
  { name: "2", value: 55, infected: 30, normal: 25 },
  { name: "3", value: 65, infected: 40, normal: 25 },
  { name: "4", value: 50, infected: 25, normal: 25 },
  { name: "5", value: 40, infected: 15, normal: 25 },
  { name: "6", value: 35, infected: 10, normal: 25 },
];

export function SeparationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Using 6 degree of Separation</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            barGap={0}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar 
              dataKey="infected" 
              stackId="a" 
              fill="#1DA1F2" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="normal" 
              stackId="a" 
              fill="#34C759" 
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-12 mt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm">Infected</span>
            </div>
            <span className="font-medium">1135</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-sm">Normal</span>
            </div>
            <span className="font-medium">635</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
