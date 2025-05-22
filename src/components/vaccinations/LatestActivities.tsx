
import { Button } from "@/components/ui/button";

interface Activity {
  date: string;
  title: string;
  status: string;
}

export function LatestActivities() {
  const activities: Activity[] = [
    {
      date: "2023/06/29 09:15 AM",
      title: "Shipment Arrived",
      status: "RECEIVED"
    },
    {
      date: "2023/06/28 01:47 PM",
      title: "Vaccination Campaign",
      status: "COMPLETED"
    },
    {
      date: "2023/05/16 09:12 AM",
      title: "New Vaccine Stock Delivery",
      status: "OPEN"
    },
    {
      date: "2023/02/01 07:42 PM",
      title: "Vaccination Campaign",
      status: "COMPLETED"
    }
  ];

  return (
    <div className="space-y-3 max-h-[200px] overflow-y-auto">
      <div className="grid grid-cols-3 text-xs text-gray-500 pb-2">
        <div>Date</div>
        <div>Detail</div>
        <div className="text-right">Status</div>
      </div>
      
      {activities.map((activity, index) => (
        <div key={index} className="grid grid-cols-3 items-center text-sm border-b border-gray-100 pb-2">
          <div className="text-xs text-gray-500">{activity.date}</div>
          <div className="font-medium">{activity.title}</div>
          <div className="text-right">
            <Button 
              size="sm" 
              className={`text-xs px-3 py-1 h-6 ${
                activity.status === "RECEIVED" 
                  ? "bg-blue-100 text-blue-600 hover:bg-blue-200" 
                  : activity.status === "COMPLETED" 
                  ? "bg-green-100 text-green-600 hover:bg-green-200"
                  : "bg-amber-100 text-amber-600 hover:bg-amber-200"
              }`}
              variant="ghost"
            >
              {activity.status}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
