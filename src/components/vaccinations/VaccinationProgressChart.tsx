
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { month: 'Jan', firstDose: 20, secondDose: 10, target: 30 },
  { month: 'Feb', firstDose: 25, secondDose: 15, target: 35 },
  { month: 'Mar', firstDose: 30, secondDose: 20, target: 40 },
  { month: 'Apr', firstDose: 38, secondDose: 25, target: 45 },
  { month: 'May', firstDose: 42, secondDose: 32, target: 50 },
  { month: 'Jun', firstDose: 48, secondDose: 37, target: 55 },
  { month: 'Jul', firstDose: 55, secondDose: 45, target: 60 },
  { month: 'Aug', firstDose: 65, secondDose: 52, target: 65 },
  { month: 'Sep', firstDose: 72, secondDose: 58, target: 70 },
];

export function VaccinationProgressChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="firstDose" 
            stroke="#FF6B6B" 
            strokeWidth={2} 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="secondDose" 
            stroke="#4D96FF" 
            strokeWidth={2} 
            dot={false} 
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#6BCB77" 
            strokeWidth={2} 
            strokeDasharray="5 5"
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
          <span className="text-xs text-gray-600">First Dose</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#4D96FF]"></div>
          <span className="text-xs text-gray-600">Second Dose</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#6BCB77]"></div>
          <span className="text-xs text-gray-600">Target</span>
        </div>
      </div>
    </div>
  );
}
