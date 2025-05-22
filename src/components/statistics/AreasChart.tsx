
import { Circle } from "lucide-react";

interface AreaData {
  name: string;
  percentage: number;
  color: string;
}

const areas: AreaData[] = [
  { name: "Kigali Rwanda", percentage: 81.57, color: "bg-cyan-500" },
  { name: "Mukono, Uganda", percentage: 64.23, color: "bg-green-500" },
  { name: "Kampala, Uganda", percentage: 52.95, color: "bg-orange-500" },
  { name: "Giseny/Rubavu", percentage: 47.23, color: "bg-blue-500" }
];

export function AreasChart() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-5 text-xs text-gray-500">
        <div className="col-span-1">0%</div>
        <div className="col-span-1 text-center">25%</div>
        <div className="col-span-1 text-center">50%</div>
        <div className="col-span-1 text-center">75%</div>
        <div className="col-span-1 text-right">100%</div>
      </div>

      {areas.map((area) => (
        <div key={area.name} className="space-y-2">
          <div className="flex items-center gap-2">
            <Circle className={`h-3 w-3 fill-current text-${area.color.replace('bg-', '')}`} />
            <span className="text-sm">{area.name}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={area.color}
              style={{ width: `${area.percentage}%` }}
            />
          </div>
          <div className="text-right text-xs text-gray-500">
            {area.percentage}%
          </div>
        </div>
      ))}
    </div>
  );
}
