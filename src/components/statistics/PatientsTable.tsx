
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Patient {
  id: number;
  name: string;
  role: string;
  image?: string;
  progress: number;
  progressColor: string;
  hospitalized: boolean;
  time: string;
}

const patients: Patient[] = [
  {
    id: 1,
    name: "Joe Doe",
    role: "Manager, H-345T",
    image: "/lovable-uploads/e4a554a6-52de-451c-b319-203e2bc527d2.png",
    progress: 67,
    progressColor: "bg-red-500",
    hospitalized: true,
    time: "18 sec ago"
  },
  {
    id: 2,
    name: "Magdalena Angel",
    role: "System Analyst",
    image: "/lovable-uploads/a22bbcbc-500f-49d4-a572-6297d9f9fe24.png",
    progress: 52,
    progressColor: "bg-blue-500",
    hospitalized: true,
    time: "3 mins ago"
  },
  {
    id: 3,
    name: "Kamal Dan",
    role: "Security Officer",
    image: "/lovable-uploads/e4a554a6-52de-451c-b319-203e2bc527d2.png",
    progress: 47,
    progressColor: "bg-red-500",
    hospitalized: true,
    time: "30 mins ago"
  }
];

export function PatientsTable() {
  return (
    <div className="space-y-6">
      {patients.map((patient) => (
        <div key={patient.id} className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={patient.image} alt={patient.name} />
              <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{patient.name}</h4>
              <p className="text-xs text-gray-500">{patient.role}</p>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mb-1">
            {patient.hospitalized && <div>Hospitalized</div>}
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${patient.progressColor}`} 
                style={{ width: `${patient.progress}%` }}
              />
            </div>
            <span className="text-xs">{patient.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
