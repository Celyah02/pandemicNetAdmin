
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', cases: 400, deaths: 240, recoveries: 200 },
  { month: 'Feb', cases: 300, deaths: 139, recoveries: 220 },
  { month: 'Mar', cases: 200, deaths: 180, recoveries: 250 },
  { month: 'Apr', cases: 278, deaths: 190, recoveries: 300 },
  { month: 'May', cases: 189, deaths: 240, recoveries: 270 },
  { month: 'Jun', cases: 350, deaths: 250, recoveries: 400 },
  { month: 'Jul', cases: 290, deaths: 220, recoveries: 380 },
  { month: 'Aug', cases: 370, deaths: 230, recoveries: 410 },
  { month: 'Sep', cases: 280, deaths: 200, recoveries: 330 },
  { month: 'Oct', cases: 390, deaths: 220, recoveries: 400 },
  { month: 'Nov', cases: 400, deaths: 250, recoveries: 420 },
  { month: 'Dec', cases: 380, deaths: 210, recoveries: 450 },
];

export function TransmissionChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 5,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Bar dataKey="cases" fill="#4A88EB" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
