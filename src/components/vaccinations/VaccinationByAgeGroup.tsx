
import { Progress } from "@/components/ui/progress"

export function VaccinationByAgeGroup() {
  const ageGroups = [
    { age: "12/35/48", progress: 75, count: "12,000,211" },
    { age: "45/65/89", progress: 60, count: "6,489,447" },
    { age: "12,396.60", progress: 85, count: "18,096.67" },
    { age: "10-18 yrs", progress: 45, count: "07/27/23" },
  ];

  return (
    <div className="space-y-6">
      {/* Gauge Chart (Simplified) */}
      <div className="flex justify-center mb-4">
        <div className="relative w-48 h-24 overflow-hidden">
          <div className="absolute w-48 h-48 bg-gray-100 rounded-full bottom-0"></div>
          <div 
            className="absolute w-48 h-48 bg-blue-500 rounded-full bottom-0"
            style={{ 
              clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)',
              transform: 'rotate(35deg)'
            }}
          ></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="text-3xl font-bold">6.5k</div>
            <div className="text-xs text-gray-500">out of 10k target</div>
          </div>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-4">
        {ageGroups.map((group, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{group.age}</span>
              <span className="text-sm font-medium">{group.count}</span>
            </div>
            <Progress value={group.progress} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
