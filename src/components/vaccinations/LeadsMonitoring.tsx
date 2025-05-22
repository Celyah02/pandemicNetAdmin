
export function LeadsMonitoring() {
  const leads = [
    {
      name: "Vaccine Supply Management",
      count: 14
    },
    {
      name: "Technical Resource Management",
      count: 24
    },
    {
      name: "Personnel",
      count: 5
    }
  ];

  return (
    <div className="space-y-4">
      {leads.map((lead, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-sm font-medium">{lead.name}</span>
          <span className="text-sm bg-gray-100 rounded-md px-2 py-0.5">{lead.count}</span>
        </div>
      ))}
    </div>
  );
}
