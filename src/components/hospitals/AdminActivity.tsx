
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const activities = [
  {
    title: "New Patient Registered",
    count: 129,
    status: "success"
  },
  {
    title: "Appointments Made",
    count: 863,
    status: "success"
  },
  {
    title: "Health Alerts Sent",
    count: 764,
    status: "warning"
  },
  {
    title: "New Treatment Notifications",
    count: 553,
    status: "warning"
  },
  {
    title: "Doctors Reports (Completed)",
    count: 103,
    status: "error"
  }
];

export function AdminActivity() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Admin Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm font-medium">{activity.title}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{activity.count}</span>
                <div className="w-16 h-6">
                  <svg viewBox="0 0 100 25" className="w-full h-full">
                    <path 
                      d="M0,12.5 Q25,0 50,12.5 Q75,25 100,12.5" 
                      fill="none" 
                      stroke={activity.status === "success" ? "#10B981" : activity.status === "warning" ? "#F59E0B" : "#EF4444"} 
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
