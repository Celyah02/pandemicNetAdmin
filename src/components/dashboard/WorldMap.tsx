import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// GeoJSON data for regions
const regions = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "USA", status: "moderate" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-125, 49], [-65, 49], [-65, 25], [-125, 25], [-125, 49]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Brazil", status: "high" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-74, 5], [-34, 5], [-34, -34], [-74, -34], [-74, 5]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Central Africa", status: "low" },
      geometry: {
        type: "Polygon",
        coordinates: [[[8, 15], [35, 15], [35, -5], [8, -5], [8, 15]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Indonesia", status: "recovered" },
      geometry: {
        type: "Polygon",
        coordinates: [[[95, 6], [141, 6], [141, -11], [95, -11], [95, 6]]]
      }
    }
  ]
};

function getRegionStyle(status: string) {
  switch (status) {
    case 'high':
      return { fillColor: '#EF4444', color: '#fff', weight: 1, fillOpacity: 0.6 };
    case 'moderate':
      return { fillColor: '#3B82F6', color: '#fff', weight: 1, fillOpacity: 0.6 };
    case 'low':
      return { fillColor: '#14B8A6', color: '#fff', weight: 1, fillOpacity: 0.6 };
    case 'recovered':
      return { fillColor: '#10B981', color: '#fff', weight: 1, fillOpacity: 0.6 };
    default:
      return { fillColor: '#E2E8F0', color: '#fff', weight: 1, fillOpacity: 0.6 };
  }
}

export function WorldMap() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Outbreak Map</CardTitle>
      </CardHeader>
      <CardContent className="h-[280px]">
        <div className="relative h-full w-full">
          <MapContainer
            center={[20, 0]}
            zoom={1.5}
            className="h-full w-full rounded-lg"
            style={{ background: '#F3F4F6' }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <GeoJSON
              data={regions as any}
              style={(feature) => getRegionStyle(feature?.properties?.status || '')}
            />
          </MapContainer>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-[#EF4444] text-white border-0">High</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#3B82F6] text-white border-0">Moderate</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#14B8A6] text-white border-0">Low</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#10B981] text-white border-0">Recovered</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
