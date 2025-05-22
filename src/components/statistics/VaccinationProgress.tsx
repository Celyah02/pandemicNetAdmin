
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function VaccinationProgress() {
  const vaccines = [
    { name: "First Dose", completed: 68 },
    { name: "Second Dose", completed: 54 },
    { name: "Booster", completed: 32 }
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Vaccination Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {vaccines.map((vaccine) => (
            <div key={vaccine.name} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{vaccine.name}</span>
                <span className="font-medium">{vaccine.completed}%</span>
              </div>
              <Progress value={vaccine.completed} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
