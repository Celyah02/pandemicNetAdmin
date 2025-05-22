
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Kigali", population: 20, vaccinated: 15 },
  { name: "Eastern", population: 18, vaccinated: 10 },
  { name: "Western", population: 15, vaccinated: 8 },
  { name: "Northern", population: 12, vaccinated: 7 },
  { name: "Southern", population: 16, vaccinated: 9 },
];

export function VaccinationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vaccination updates</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart 
            data={data}
            barGap={8}
            barCategoryGap={30}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="population" fill="#1DA1F2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="vaccinated" fill="#34C759" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-8 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-gray-600">Population</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="text-sm text-gray-600">Vaccinated</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
