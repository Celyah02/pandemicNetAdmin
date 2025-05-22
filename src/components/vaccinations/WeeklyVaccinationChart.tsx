
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', value: 25 },
  { day: 'Tue', value: 40 },
  { day: 'Wed', value: 30 },
  { day: 'Thu', value: 70 },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 60 },
  { day: 'Sun', value: 20 },
];

export function WeeklyVaccinationChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Bar 
            dataKey="value" 
            fill="#4D96FF" 
            radius={[4, 4, 0, 0]}
            maxBarSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
