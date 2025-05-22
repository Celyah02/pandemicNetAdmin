
import React from 'react';
import { cn } from "@/lib/utils";

const healthCenters = [
  {
    name: "Muhima Hospital",
    beds: 542,
    occupied: 431,
    available: 111,
    status: "Accepting patients",
    statusColor: "text-green-600"
  },
  {
    name: "Kibagabaga Hospital",
    beds: 378,
    occupied: 294,
    available: 84, 
    status: "Accepting patients",
    statusColor: "text-green-600"
  },
  {
    name: "King Faisal Hospital",
    beds: 294,
    occupied: 210,
    available: 84,
    status: "Accepting patients",
    statusColor: "text-green-600"
  },
  {
    name: "CHUK Medical Center",
    beds: 632,
    occupied: 578,
    available: 54,
    status: "At maximum capacity",
    statusColor: "text-red-600"
  },
  {
    name: "Kigali Medical Hospital",
    beds: 184,
    occupied: 149,
    available: 35,
    status: "Accepting patients",
    statusColor: "text-green-600"
  },
];

export function HealthCenterTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2 font-medium">Hospital</th>
            <th className="pb-2 font-medium text-center">Beds</th>
            <th className="pb-2 font-medium text-center">Occupied</th>
            <th className="pb-2 font-medium text-center">Available</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {healthCenters.map((center, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3 font-medium">{center.name}</td>
              <td className="py-3 text-center">{center.beds}</td>
              <td className="py-3 text-center">{center.occupied}</td>
              <td className="py-3 text-center">{center.available}</td>
              <td className={cn("py-3", center.statusColor)}>{center.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
