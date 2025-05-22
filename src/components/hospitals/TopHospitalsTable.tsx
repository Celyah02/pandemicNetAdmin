
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  {
    name: "Kanombe Military Hospital",
    count: 358
  },
  {
    name: "King Faisal Hospital",
    count: 265
  },
  {
    name: "Rwanda Military Hospital",
    count: 198
  },
  {
    name: "Muhima Hospital",
    count: 189
  },
  {
    name: "Chuk-Hospital",
    count: 163
  }
];

export function TopHospitalsTable() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Top Hospitals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hospitals.map((hospital, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{hospital.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{hospital.count}</span>
                <div className="w-16 h-6">
                  <svg viewBox="0 0 100 25" className="w-full h-full">
                    <path 
                      d="M0,12.5 Q25,0 50,12.5 Q75,25 100,12.5" 
                      fill="none" 
                      stroke="#4C6FFF" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
