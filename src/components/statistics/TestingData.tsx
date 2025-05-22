
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", positive: 320, negative: 2400 },
  { month: "Feb", positive: 380, negative: 2210 },
  { month: "Mar", positive: 450, negative: 2290 },
  { month: "Apr", positive: 410, negative: 2000 },
  { month: "May", positive: 520, negative: 2181 },
  { month: "Jun", positive: 400, negative: 2500 }
];

export function TestingData() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Testing Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <Bar dataKey="positive" fill="#FF6384" name="Positive Tests" />
              <Bar dataKey="negative" fill="#36A2EB" name="Negative Tests" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
