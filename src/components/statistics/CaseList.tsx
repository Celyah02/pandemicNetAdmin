
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";

interface Case {
  id: string;
  patientId: string;
  date: string;
  hospitalName: string;
  location: string;
  severityLevel: string;
  statusColor: string;
  status: string;
}

const cases: Case[] = [
  {
    id: "1",
    patientId: "#12434",
    date: "Dec 1, 2024",
    hospitalName: "Kanombe Hospital",
    location: "323 Kairando Ave",
    severityLevel: "Critical",
    statusColor: "bg-green-500",
    status: "Active"
  },
  {
    id: "2",
    patientId: "#12410",
    date: "Nov 15, 2023",
    hospitalName: "Thomas Beer",
    location: "Lithop Ave, Norway",
    severityLevel: "Severe",
    statusColor: "bg-yellow-500",
    status: "Mild Progress"
  },
  {
    id: "3",
    patientId: "#12520",
    date: "Mar 02, 2023",
    hospitalName: "Dr Nathan",
    location: "1020 Bruce Ave, Fortgate",
    severityLevel: "Mild",
    statusColor: "bg-orange-500",
    status: "On Recovery"
  },
];

export function CaseList() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Severity Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((caseItem, index) => (
            <TableRow key={caseItem.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{caseItem.patientId}</TableCell>
              <TableCell>{caseItem.date}</TableCell>
              <TableCell>{caseItem.hospitalName}</TableCell>
              <TableCell className="text-gray-500 text-sm">{caseItem.location}</TableCell>
              <TableCell>{caseItem.severityLevel}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${caseItem.statusColor}`}></div>
                  <span>{caseItem.status}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
