
import React from 'react';
import { Badge } from "@/components/ui/badge";

const vaccinations = [
  {
    name: "Pfizer-BioNTech",
    totalVaccinated: "2,780,902 people",
    coverage: 73,
    status: "Available",
    statusColor: "bg-green-500"
  },
  {
    name: "Moderna",
    totalVaccinated: "1,450,650 people",
    coverage: 45,
    status: "Limited",
    statusColor: "bg-yellow-500"
  },
  {
    name: "Johnson & Johnson",
    totalVaccinated: "890,345 people",
    coverage: 28,
    status: "Available",
    statusColor: "bg-green-500"
  },
  {
    name: "Oxford-AstraZeneca",
    totalVaccinated: "1,020,780 people",
    coverage: 33,
    status: "Limited",
    statusColor: "bg-yellow-500"
  },
  {
    name: "Sinovac",
    totalVaccinated: "568,230 people",
    coverage: 18,
    status: "Limited",
    statusColor: "bg-yellow-500"
  },
];

export function VaccinationTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2 font-medium">Vaccine</th>
            <th className="pb-2 font-medium">Total Vaccinated</th>
            <th className="pb-2 font-medium text-right">Coverage</th>
            <th className="pb-2 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {vaccinations.map((vaccine, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3 font-medium">{vaccine.name}</td>
              <td className="py-3">{vaccine.totalVaccinated}</td>
              <td className="py-3 text-right">{vaccine.coverage}%</td>
              <td className="py-3 text-right">
                <Badge className={`${vaccine.statusColor} text-white border-0`}>
                  {vaccine.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
