
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const hospitals = [
  {
    id: "01",
    name: "Kanombe Hospital",
    patients: 45,
    recovered: 35,
  },
  {
    id: "02",
    name: "King Faisal Hospital",
    patients: 28,
    recovered: 20,
  },
  {
    id: "03",
    name: "Legacy Clinic",
    patients: 18,
    recovered: 13,
  },
  {
    id: "04",
    name: "Nygatare Poly-clinic",
    patients: 32,
    recovered: 26,
  },
];

export function HospitalsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hospitals that are treating people with the pandemic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm font-medium text-gray-500 border-b pb-2 mb-2">
          <div className="w-16">#</div>
          <div className="flex-1">Name</div>
          <div className="w-28 text-center">Patients</div>
          <div className="w-28 text-center">Recovered</div>
        </div>
        {hospitals.map((hospital) => {
          const recoveryRate = Math.floor((hospital.recovered / hospital.patients) * 100);
          const progressColor = recoveryRate >= 70 
            ? "bg-success" 
            : recoveryRate >= 50 
              ? "bg-warning" 
              : "bg-destructive";
              
          return (
            <div key={hospital.id} className="flex items-center py-3 text-sm">
              <div className="w-16 text-gray-400">{hospital.id}</div>
              <div className="flex-1 font-medium">{hospital.name}</div>
              <div className="w-28 text-center">{hospital.patients}</div>
              <div className="w-28 flex items-center justify-end gap-2">
                <div className="h-2 w-20 relative overflow-hidden rounded-full bg-secondary">
                  <div 
                    className={cn("h-full absolute left-0", progressColor)}
                    style={{ width: `${recoveryRate}%` }}
                  />
                </div>
                <Badge variant="outline">{recoveryRate}%</Badge>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
