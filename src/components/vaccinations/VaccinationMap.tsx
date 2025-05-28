import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// GeoJSON data for Rwanda provinces
const rwandaProvinces = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { 
        name: "Eastern Province", 
        coverage: 0.72,
        firstDose: 850000,
        secondDose: 720000,
        pending: 130000
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[30.7, -1.5], [30.9, -1.5], [30.9, -2.2], [30.7, -2.2], [30.7, -1.5]]]
      }
    },
    {
      type: "Feature",
      properties: { 
        name: "Kigali City", 
        coverage: 0.85,
        firstDose: 1200000,
        secondDose: 1100000,
        pending: 100000
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[30.0, -1.9], [30.2, -1.9], [30.2, -2.0], [30.0, -2.0], [30.0, -1.9]]]
      }
    },
    {
      type: "Feature",
      properties: { 
        name: "Northern Province", 
        coverage: 0.68,
        firstDose: 650000,
        secondDose: 580000,
        pending: 70000
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[30.0, -1.4], [30.4, -1.4], [30.4, -1.8], [30.0, -1.8], [30.0, -1.4]]]
      }
    },
    {
      type: "Feature",
      properties: { 
        name: "Southern Province", 
        coverage: 0.75,
        firstDose: 920000,
        secondDose: 850000,
        pending: 70000
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[29.8, -2.0], [30.3, -2.0], [30.3, -2.4], [29.8, -2.4], [29.8, -2.0]]]
      }
    },
    {
      type: "Feature",
      properties: { 
        name: "Western Province", 
        coverage: 0.70,
        firstDose: 780000,
        secondDose: 700000,
        pending: 80000
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[29.4, -1.6], [29.8, -1.6], [29.8, -2.2], [29.4, -2.2], [29.4, -1.6]]]
      }
    }
  ]
};

function getRegionStyle(coverage: number) {
  // Color scale based on vaccination coverage
  const getColor = (coverage: number) => {
    if (coverage >= 0.8) return '#059669'; // Green for high coverage
    if (coverage >= 0.7) return '#10B981'; // Light green for good coverage
    if (coverage >= 0.6) return '#6EE7B7'; // Very light green for moderate coverage
    return '#D1FAE5'; // Pale green for low coverage
  };

  return {
    fillColor: getColor(coverage),
    color: '#fff',
    weight: 1,
    fillOpacity: 0.7
  };
}

export function VaccinationMap() {
  return (
    <div className="relative h-[500px] bg-white rounded-lg shadow-sm p-4">
      {/* Title */}
      <div className="absolute top-4 left-4 z-[1000]">
        <h2 className="text-lg font-bold text-gray-800">Rwanda Vaccination Coverage</h2>
        <p className="text-sm text-gray-600 mt-1">Province-wise vaccination status</p>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-[1000] bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Select defaultValue="weekly">
            <SelectTrigger className="w-[120px] h-8 text-sm text-gray-600">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">This Week</SelectItem>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="yearly">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#059669]"></div>
            <span className="text-xs text-gray-600">Above 80% Coverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#10B981]"></div>
            <span className="text-xs text-gray-600">70-80% Coverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#6EE7B7]"></div>
            <span className="text-xs text-gray-600">60-70% Coverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#D1FAE5]"></div>
            <span className="text-xs text-gray-600">Below 60% Coverage</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <MapContainer
        center={[-1.9403, 29.8739]} // Center coordinates for Rwanda
        zoom={8} // Adjusted zoom level for Rwanda
        className="h-full w-full"
        style={{ background: '#F3F4F6' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={rwandaProvinces as any}
          style={(feature) => getRegionStyle(feature?.properties?.coverage || 0)}
        >
          {(layer) => {
            const properties = layer.feature.properties;
            layer.bindTooltip(
              `<div class="bg-white p-2 rounded-lg shadow-lg">
                <h3 class="font-bold">${properties.name}</h3>
                <p class="text-sm">Coverage: ${(properties.coverage * 100).toFixed(1)}%</p>
                <div class="text-xs mt-1">
                  <p>First Dose: ${properties.firstDose.toLocaleString()}</p>
                  <p>Second Dose: ${properties.secondDose.toLocaleString()}</p>
                  <p>Pending: ${properties.pending.toLocaleString()}</p>
                </div>
              </div>`,
              { sticky: true }
            );
          }}
        </GeoJSON>
      </MapContainer>
    </div>
  );
}
