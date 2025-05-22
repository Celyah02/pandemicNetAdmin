
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

// Define data for different types of mutations
const data = [
  { date: "W1", probability: 30, newVariant: 25, potentialHighRisk: 15 },
  { date: "W2", probability: 35, newVariant: 30, potentialHighRisk: 20 },
  { date: "W3", probability: 32, newVariant: 28, potentialHighRisk: 18 },
  { date: "W4", probability: 38, newVariant: 35, potentialHighRisk: 25 },
  { date: "W5", probability: 42, newVariant: 38, potentialHighRisk: 28 },
  { date: "W6", probability: 40, newVariant: 36, potentialHighRisk: 26 },
  { date: "W7", probability: 45, newVariant: 40, potentialHighRisk: 30 },
];

interface MutationMetricProps {
  name: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}

function MutationMetric({ name, value, change, changeType }: MutationMetricProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${name === "All Predicted Mutation Rate" ? "bg-red-500" : name === "New Variant Detection" ? "bg-blue-500" : "bg-purple-500"}`}></div>
        <span className="text-xs">{name}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="font-medium text-xs">{value}</span>
        <span className={`text-xs ${changeType === "positive" ? "text-green-500" : "text-red-500"}`}>{change}</span>
      </div>
    </div>
  );
}

export function MutationProbability() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md font-medium">Virus Mutation Probability</CardTitle>
          <select className="text-xs border border-gray-200 rounded px-2 py-1 bg-transparent">
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-3">
          <MutationMetric 
            name="All Predicted Mutation Rate"
            value="3,857" 
            change="(15%)"
            changeType="positive"
          />
          <MutationMetric 
            name="New Variant Detection"
            value="2,345" 
            change="(5%)"
            changeType="negative"
          />
          <MutationMetric 
            name="Potential High-Risk Mutations"
            value="1,544" 
            change="(2%)"
            changeType="positive"
          />
        </div>
        <div className="h-[120px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                hide={true}
                domain={[0, 'dataMax + 10']} 
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "Probability"]}
                labelFormatter={(label) => `Week ${label.substring(1)}`}
                contentStyle={{ fontSize: "12px" }}
              />
              <Line
                type="monotone"
                dataKey="probability"
                stroke="#ef4444"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="newVariant"
                stroke="#3b82f6"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="potentialHighRisk"
                stroke="#a855f7"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
