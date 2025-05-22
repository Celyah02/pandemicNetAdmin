
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

export function StatisticsOverview() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Statistics Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Total Cases</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">24,593</span>
              <span className="flex items-center text-xs text-green-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                12%
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Active Cases</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">4,263</span>
              <span className="flex items-center text-xs text-red-500">
                <ArrowDown className="h-3 w-3 mr-1" />
                3%
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Recovered</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">19,425</span>
              <span className="flex items-center text-xs text-green-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                8%
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="text-sm font-medium text-muted-foreground">Deaths</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">905</span>
              <span className="flex items-center text-xs text-red-500">
                <ArrowUp className="h-3 w-3 mr-1" />
                2%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
