
import { Check, ExternalLink, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function VaccinationProgressByCenter() {
  const centers = [
    {
      name: "Kigali Vaccination Center",
      status: "Live",
      buttonText: "View"
    },
    {
      name: "Central Kigali Vaccination Center",
      status: "Live",
      buttonText: "View"
    },
    {
      name: "Remera Vaccination Center",
      status: "Paused",
      buttonText: "View"
    }
  ];

  return (
    <div className="space-y-4">
      {centers.map((center, index) => (
        <div key={index} className="flex items-center justify-between py-1">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${center.status === "Live" ? "bg-green-100" : "bg-amber-100"}`}>
              {center.status === "Live" ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <FileCheck className="h-4 w-4 text-amber-600" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{center.name}</p>
              <Badge 
                variant="outline" 
                className={`text-xs font-normal ${
                  center.status === "Live" 
                    ? "bg-green-50 text-green-700 border-green-200" 
                    : "bg-amber-50 text-amber-700 border-amber-200"
                }`}
              >
                {center.status}
              </Badge>
            </div>
          </div>
          <Button size="sm" variant="outline" className="text-xs">
            {center.buttonText}
            <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </div>
      ))}
    </div>
  );
}
