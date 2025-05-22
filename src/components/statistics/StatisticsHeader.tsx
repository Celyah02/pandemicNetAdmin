
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function StatisticsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <h1 className="text-2xl font-bold">Statistics</h1>
      <Button className="mt-2 md:mt-0 flex items-center gap-2">
        <FileText className="h-4 w-4" /> Export Report
      </Button>
    </div>
  );
}
