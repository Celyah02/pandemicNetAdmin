
import React from 'react';
import { Badge } from "@/components/ui/badge";

const controlMeasures = [
  {
    measure: "Social distancing enforced",
    location: "Nationwide",
    status: "Active until further notice",
    statusColor: "bg-green-500"
  },
  {
    measure: "School closures",
    location: "Major urban centers",
    status: "Active for 2 more weeks",
    statusColor: "bg-green-500"
  },
  {
    measure: "International travel restrictions",
    location: "All entry points",
    status: "Active until further notice",
    statusColor: "bg-green-500"
  },
  {
    measure: "Public mask mandate",
    location: "All public spaces",
    status: "Active for 3 more months",
    statusColor: "bg-green-500"
  },
  {
    measure: "Business capacity limits",
    location: "Urban centers",
    status: "Under review",
    statusColor: "bg-yellow-500"
  },
];

export function ControlMeasuresTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2 font-medium">Measure</th>
            <th className="pb-2 font-medium">Location</th>
            <th className="pb-2 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {controlMeasures.map((measure, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3 font-medium">{measure.measure}</td>
              <td className="py-3">{measure.location}</td>
              <td className="py-3 text-right">
                <Badge className={`${measure.statusColor} text-white border-0`}>
                  {measure.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
