
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  {
    id: "H51510",
    name: "Kanombe Military Hospital",
    location: "Kigali, Rwanda",
    patients: 358,
    capacity: 500,
    status: "Critical",
    statusColor: "destructive",
    createdAt: "Nov 12, 2023",
    lastUpdate: "2 hours ago"
  },
  {
    id: "H63720",
    name: "King Faisal Hospital",
    location: "Kigali Central, Rwanda",
    patients: 265,
    capacity: 600,
    status: "Operational",
    statusColor: "success",
    createdAt: "Jan 15, 2023",
    lastUpdate: "1 day ago"
  },
  {
    id: "H42651",
    name: "Rwanda Military Hospital",
    location: "Nyarutarama, Kigali",
    patients: 198,
    capacity: 350,
    status: "Operational",
    statusColor: "success",
    createdAt: "Apr 22, 2023",
    lastUpdate: "5 hours ago"
  },
  {
    id: "H95105",
    name: "Muhima Hospital",
    location: "Muhima, Nyarugenge",
    patients: 189,
    capacity: 280,
    status: "Warning",
    statusColor: "warning",
    createdAt: "Mar 08, 2023",
    lastUpdate: "3 days ago"
  },
  {
    id: "H10943",
    name: "CHUK University Hospital",
    location: "Kigali, Rwanda",
    patients: 231,
    capacity: 370,
    status: "Overcrowded",
    statusColor: "destructive",
    createdAt: "Sep 19, 2023",
    lastUpdate: "12 hours ago"
  },
];

export function HospitalsDataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Hospitals Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-center">Cases Severity</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Treatment Method (active)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hospitals.map((hospital) => (
              <TableRow key={hospital.id}>
                <TableCell className="font-medium">{hospital.id}</TableCell>
                <TableCell>{hospital.name}</TableCell>
                <TableCell>{hospital.location}</TableCell>
                <TableCell className="text-center">
                  <div className="inline-flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-6 rounded-sm ${
                          i < Math.floor(hospital.patients / hospital.capacity * 5) 
                            ? "bg-primary" 
                            : "bg-gray-200"
                        }`} 
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={hospital.statusColor as any}>{hospital.status}</Badge>
                </TableCell>
                <TableCell className="text-center">Medication</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
