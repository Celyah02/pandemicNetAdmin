import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", actual: 89000, predicted: 85000, upperBound: 95000, lowerBound: 80000 },
  { month: "Feb", actual: 95000, predicted: 92000, upperBound: 99000, lowerBound: 85000 },
  { month: "Mar", actual: 102000, predicted: 100000, upperBound: 108000, lowerBound: 92000 },
  { month: "Apr", actual: 108000, predicted: 106000, upperBound: 115000, lowerBound: 98000 },
  { month: "May", actual: 120000, predicted: 115000, upperBound: 125000, lowerBound: 105000 },
  { month: "Jun", actual: 135000, predicted: 130000, upperBound: 140000, lowerBound: 120000 },
  { month: "Jul", actual: 140000, predicted: 145000, upperBound: 155000, lowerBound: 135000 },
  { month: "Aug", actual: null, predicted: 155000, upperBound: 165000, lowerBound: 145000 },
  { month: "Sep", actual: null, predicted: 165000, upperBound: 178000, lowerBound: 152000 },
  { month: "Oct", actual: null, predicted: 172000, upperBound: 185000, lowerBound: 158000 },
];

const stats = [
  { label: "Total Cases", value: "89,935", change: "+1,073", percent: "1.2%", period: "this week" },
  { label: "Average Cases", value: "23,283.5", change: "+1,236", percent: "5.6%", period: "this week" },
  { label: "Total Predicted Cases", value: "46,827", change: "-250", percent: "0.5%", period: "this week" },
  { label: "Total Recovered Cases", value: "124,854", change: "+1,174", percent: "0.9%", period: "this week" },
];

export function PredictionsOverview() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <CardTitle>Predictions</CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 sm:mt-0">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Predicted/Future Predicted Cases</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Actual vs. Predicted Trend</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full opacity-30 bg-blue-500"></div>
              <span>Bound (Spread Projection)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <span className="text-2xl font-bold">{stat.value}</span>
              <div className="flex items-center gap-1.5 text-xs">
                <span className={stat.change.startsWith('+') ? "text-green-500" : "text-red-500"}>
                  {stat.change} ({stat.percent} {stat.period})
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[320px] w-full mt-6">
          <ChartContainer
            config={{
              actual: {
                label: "Actual",
                color: "#ff0000",
              },
              predicted: {
                label: "Predicted",
                color: "#3b82f6",
              },
              upperBound: {
                label: "Upper Bound",
                color: "#93c5fd",
              },
              lowerBound: {
                label: "Lower Bound",
                color: "#93c5fd",
              },
            }}
          >
            <>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 15, right: 15, left: 15, bottom: 15 }}
                >
                  <defs>
                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorBounds" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#93c5fd" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#93c5fd" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: "#888" }}
                  />
                  <YAxis
                    tickFormatter={(value) => `${value / 1000}K`}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: "#888" }}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <ChartTooltipContent
                            className="border-none bg-white shadow-lg"
                            payload={payload}
                          />
                        );
                      }
                      return null;
                    }}
                  />
                  {/* Bounds area */}
                  <Area
                    type="monotone"
                    dataKey="upperBound"
                    stroke="transparent"
                    fill="url(#colorBounds)"
                    activeDot={false}
                    isAnimationActive={false}
                    legendType="none"
                    stackId="1"
                  />
                  <Area
                    type="monotone"
                    dataKey="lowerBound"
                    stroke="transparent"
                    fill="transparent"
                    activeDot={false}
                    isAnimationActive={false}
                    legendType="none"
                    stackId="1"
                    baseValue={140000}
                  />
                  {/* Predicted line */}
                  <Area
                    type="monotone"
                    dataKey="predicted"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#colorPredicted)"
                    activeDot={{ r: 6, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }}
                    isAnimationActive={true}
                    dot={false}
                  />
                  {/* Actual line */}
                  <Area
                    type="monotone"
                    dataKey="actual"
                    stroke="#ff0000"
                    strokeWidth={2}
                    fill="transparent"
                    activeDot={{ r: 6, fill: "#fff", stroke: "#ff0000", strokeWidth: 2 }}
                    isAnimationActive={true}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
