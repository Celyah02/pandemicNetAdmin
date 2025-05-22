
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Hospital Deployment",
    value: "4,209",
    charts: [
      { label: "ICU", percentage: 60, color: "#4C6FFF" },
      { label: "ER", percentage: 40, color: "#E4E8EF" }
    ]
  },
  {
    title: "Occupied & Available Hospitals",
    value: "1,302",
    charts: [
      { label: "Occupied", percentage: 70, color: "#4C6FFF" },
      { label: "Available", percentage: 30, color: "#E4E8EF" }
    ]
  },
  {
    title: "Total COVID Patients (Covered)",
    value: "$25K",
    subLabel: "Available Seats",
    subValue: "$25K"
  },
  {
    title: "Government & Private Hospital",
    value: "$25K",
    subLabel: "Private (50%) / Government (50%)",
    subValue: "$25K"
  },
  {
    title: "Patient Admission Trends",
    chart: "barChart"
  }
];

export function HospitalsStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-sm">
          <CardContent className="p-4">
            <div className="text-xs text-gray-500">{stat.title}</div>
            
            {stat.value && (
              <div className="text-xl font-bold mt-1">{stat.value}</div>
            )}
            
            {stat.charts && (
              <div className="mt-3 flex gap-2">
                <div className="w-20 h-20 relative">
                  <svg viewBox="0 0 36 36" className="w-20 h-20 transform -rotate-90">
                    {stat.charts.map((chart, i) => {
                      const offset = i === 0 ? 0 : stat.charts[i-1].percentage / 100 * 100;
                      return (
                        <circle
                          key={i}
                          cx="18"
                          cy="18"
                          r="15.91549430918954"
                          fill="transparent"
                          stroke={chart.color}
                          strokeWidth="3.8"
                          strokeDasharray={`${chart.percentage} ${100 - chart.percentage}`}
                          strokeDashoffset={`${-offset}`}
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="space-y-2">
                  {stat.charts.map((chart, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="w-3 h-3" style={{ backgroundColor: chart.color }} />
                      <span className="text-xs">{chart.label} ({chart.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {stat.subLabel && (
              <div className="mt-3">
                <div className="text-xs text-gray-500">{stat.subLabel}</div>
                <div className="text-sm font-bold">{stat.subValue}</div>
              </div>
            )}
            
            {stat.chart === "barChart" && (
              <div className="mt-3 h-12">
                <div className="flex h-full items-end gap-1">
                  {Array.from({ length: 6 }).map((_, i) => {
                    const height = 20 + Math.random() * 70;
                    return (
                      <div 
                        key={i} 
                        className="bg-primary flex-1 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
