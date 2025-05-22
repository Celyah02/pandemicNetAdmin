
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WorldMap() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Outbreak Map</CardTitle>
      </CardHeader>
      <CardContent className="h-[280px]">
        <div className="relative h-full w-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/74332416-5ec7-4bdc-acaa-60e5c433c1cf.png" 
            alt="Pandemic Map" 
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-red-500 text-white border-0">High</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-500 text-white border-0">Moderate</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-500 text-white border-0">Low</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-cyan-500 text-white border-0">Recovered</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
