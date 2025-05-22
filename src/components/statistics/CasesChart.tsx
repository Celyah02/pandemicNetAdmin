
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
  { month: "Aug 2024", cases: 1800 },
  { month: "Sep 2024", cases: 2100 },
  { month: "Oct 2024", cases: 2600 },
  { month: "Nov 2024", cases: 2200 },
  { month: "Dec 2024", cases: 1900 },
  { month: "Jan 2025", cases: 2000 },
  { month: "Feb 2025", cases: 2500 },
  { month: "Mar 2025", cases: 2300 },
  { month: "Apr 2025", cases: 2400 },
  { month: "May 2025", cases: 2000 },
];

export function CasesChart() {
  return (
    <div className="h-[220px] w-full">
      <ChartContainer
        config={{
          cases: {
            label: "Cases",
            color: "#3b82f6",
          },
        }}
      >
        {/* Wrap the ResponsiveContainer and absolute div in a single fragment */}
        <>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#888" }}
              />
              <YAxis hide={true} domain={['auto', 'auto']} />
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
              <Area
                type="monotone"
                dataKey="cases"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#colorCases)"
                activeDot={{ r: 6, fill: "#fff", stroke: "#3b82f6", strokeWidth: 2 }}
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center gap-2">
            <div className="bg-primary text-white text-xs px-2 py-1 rounded-full">2345</div>
            <div className="h-8 w-px bg-primary"></div>
          </div>
        </>
      </ChartContainer>
    </div>
  );
}
