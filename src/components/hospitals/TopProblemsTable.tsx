
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  { name: "Respiratory Problems", count: 60, severity: "high" },
  { name: "General Check-ups", count: 42, severity: "low" },
  { name: "COVID-19 Testing", count: 38, severity: "medium" },
  { name: "Mental Health", count: 35, severity: "medium" },
  { name: "Other Diseases", count: 30, severity: "low" }
];

export function TopProblemsTable() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Top Problems</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {problems.map((problem, i) => (
            <div key={i} className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <span className="text-sm font-medium">{problem.name}</span>
              </div>
              <div className="col-span-3">
                <span className="text-sm font-medium text-gray-500">Frequency</span>
              </div>
              <div className="col-span-4">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      problem.severity === "high" 
                        ? "bg-destructive" 
                        : problem.severity === "medium" 
                          ? "bg-yellow-500" 
                          : "bg-green-500"
                    }`}
                    style={{ width: `${problem.count}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
