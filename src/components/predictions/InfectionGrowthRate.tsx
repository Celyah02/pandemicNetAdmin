
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Sept", rate: 10 },
  { date: "Oct", rate: 15 },
  { date: "Nov", rate: 20 },
  { date: "Dec", rate: 25 },
  { date: "Jan", rate: 30 },
  { date: "Feb", rate: 40 },
  { date: "Mar", rate: 50 },
  { date: "Apr", rate: 60 },
  { date: "May", rate: 65 },
  { date: "Jun", rate: 70 },
];

export function InfectionGrowthRate() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Current Infection Growth Rate</CardTitle>
          <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-transparent">
            <option>Time Series</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2 text-sm">
          <div className="font-medium">
            2.35%
          </div>
          <div className="flex items-center px-1.5 py-0.5 rounded bg-gray-100">
            <span className="text-xs text-green-500">Significant Growth</span>
          </div>
        </div>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "Growth Rate"]}
                labelFormatter={(label) => `${label}`}
                contentStyle={{ fontSize: "12px" }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={{ r: 3, fill: "#4f46e5", stroke: "#fff", strokeWidth: 1 }}
                activeDot={{ r: 5, fill: "#fff", stroke: "#4f46e5", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
