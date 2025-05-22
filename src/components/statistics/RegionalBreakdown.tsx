
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreasChart } from "@/components/statistics/AreasChart";

export function RegionalBreakdown() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Regional Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <AreasChart />
      </CardContent>
    </Card>
  );
}
