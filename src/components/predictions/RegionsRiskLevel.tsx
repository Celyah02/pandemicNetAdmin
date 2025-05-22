
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { ChevronRight } from "lucide-react";

const data = [
  { name: "Metropolitan", value: 45 },
  { name: "Suburbs", value: 30 },
  { name: "Rural", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function RegionsRiskLevel() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Risk Level for Regions</CardTitle>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="h-[220px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend 
                layout="vertical" 
                align="center" 
                verticalAlign="bottom"
                formatter={(value) => <span className="text-xs">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
