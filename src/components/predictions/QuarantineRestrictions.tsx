
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Planned", value: 2574 },
  { name: "Active", value: 1426 }
];

const COLORS = ["#3b82f6", "#60a5fa"];

export function QuarantineRestrictions() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Quarantine & Restriction Updates</CardTitle>
          <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-transparent">
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] w-full mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={-270}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* Show total in middle */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                fontSize="24"
              >
                4000
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs">Planned: 64%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <span className="text-xs">Active: 36%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
