
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarView } from "@/components/statistics/CalendarView";

export function DemographicData() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Demographics</CardTitle>
      </CardHeader>
      <CardContent>
        <CalendarView />
      </CardContent>
    </Card>
  );
}
