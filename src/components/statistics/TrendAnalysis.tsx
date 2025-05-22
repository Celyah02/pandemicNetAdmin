
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CasesChart } from "@/components/statistics/CasesChart";

export function TrendAnalysis() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Trend Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <CasesChart />
      </CardContent>
    </Card>
  );
}
