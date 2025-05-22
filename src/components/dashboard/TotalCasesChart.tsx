
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Apr", cases: 65 },
  { month: "May", cases: 59 },
  { month: "Jun", cases: 80 },
  { month: "Jul", cases: 70 },
  { month: "Aug", cases: 56 },
  { month: "Sep", cases: 89 },
  { month: "Oct", cases: 94 },
  { month: "Nov", cases: 76 },
  { month: "Dec", cases: 85 },
  { month: "Jan", cases: 90 },
  { month: "Feb", cases: 100 },
  { month: "Mar", cases: 92 },
];

export function TotalCasesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            barGap={8}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="cases" fill="#1DA1F2" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-between mt-4 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span className="text-xs text-gray-600">Recovered Cases</span>
            </div>
            <div className="text-xs font-semibold ml-4">82.3% <span className="text-success">(+12%)</span></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-xs text-gray-600">Infected Cases</span>
            </div>
            <div className="text-xs font-semibold ml-4">17.7% <span className="text-destructive">(+8%)</span></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
