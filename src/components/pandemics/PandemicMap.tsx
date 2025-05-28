import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const blueIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="#4299E1" stroke="white" stroke-width="2"/>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const redIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="#EF4444" stroke="white" stroke-width="2"/>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

const markers = [
  { name: "Nyagatare", position: [1.3, 30.3], totalCases: 10000, recovered: 700, deaths: 6000, isDanger: true },
  { name: "New York", position: [40.7, -74.0], totalCases: 8000, recovered: 500, deaths: 4000, isDanger: true },
  { name: "Paris", position: [48.9, 2.4], totalCases: 6000, recovered: 400, deaths: 3000, isDanger: false },
  { name: "Moscow", position: [55.8, 37.6], totalCases: 7000, recovered: 450, deaths: 3500, isDanger: true },
  { name: "Nairobi", position: [-1.3, 36.8], totalCases: 5000, recovered: 300, deaths: 2500, isDanger: false },
  // Additional danger zones
  { name: "Delhi", position: [28.6, 77.2], totalCases: 12000, recovered: 800, deaths: 7000, isDanger: true },
  { name: "São Paulo", position: [-23.5, -46.6], totalCases: 9000, recovered: 600, deaths: 5000, isDanger: true },
  { name: "Tokyo", position: [35.7, 139.7], totalCases: 7500, recovered: 550, deaths: 4000, isDanger: true }
];

// GeoJSON data for regions
const regions = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Brazil", timeframe: "last24" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-74, 5], [-34, 5], [-34, -34], [-74, -34], [-74, 5]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Eastern USA", timeframe: "lastWeek" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-95, 49], [-70, 49], [-70, 25], [-95, 25], [-95, 49]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Western USA", timeframe: "lastMonth" },
      geometry: {
        type: "Polygon",
        coordinates: [[[-125, 49], [-100, 49], [-100, 25], [-125, 25], [-125, 49]]]
      }
    }
  ]
};

function getRegionStyle(timeframe: string) {
  switch (timeframe) {
    case 'last24':
      return { fillColor: '#A3BFFA', color: '#fff', weight: 1, fillOpacity: 0.6 };
    case 'lastWeek':
      return { fillColor: '#7F9CF5', color: '#fff', weight: 1, fillOpacity: 0.6 };
    case 'lastMonth':
      return { fillColor: '#5A67D8', color: '#fff', weight: 1, fillOpacity: 0.6 };
    default:
      return { fillColor: '#E2E8F0', color: '#fff', weight: 1, fillOpacity: 0.6 };
  }
}

export function PandemicMap() {
  return (
    <div className="relative h-[500px] w-full bg-white rounded-lg p-4">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full rounded-lg"
        style={{ background: '#EBF8FF' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={regions as any}
          style={(feature) => getRegionStyle(feature?.properties?.timeframe || '')}
        />

        {markers.map((marker) => (
          <Marker
            key={marker.name}
            position={marker.position as [number, number]}
            icon={marker.isDanger ? redIcon : blueIcon}
          >
            <Popup className="rounded-lg shadow-lg">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold mb-2">{marker.name}</h3>
                {marker.isDanger && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm text-red-500">Danger zone</span>
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#4299E1]"></div>
                  <span className="text-sm">Total cases: {marker.totalCases.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
                  <span className="text-sm">Recovered: {marker.recovered.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
                  <span className="text-sm">Death: {marker.deaths.toLocaleString()}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-sm z-[1000] flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#A3BFFA]"></div>
          <span className="text-sm">Last 24 hours</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#7F9CF5]"></div>
          <span className="text-sm">Last week</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#5A67D8]"></div>
          <span className="text-sm">Last month</span>
        </div>
      </div>
    </div>
  );
}
