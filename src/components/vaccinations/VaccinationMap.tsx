
import { useEffect, useRef } from 'react';

export function VaccinationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  // Simple rendering of a world map image
  useEffect(() => {
    if (mapRef.current) {
      const mapDiv = mapRef.current;
      mapDiv.innerHTML = ''; // Clear any previous content
    }
  }, []);

  return (
    <div className="relative h-[280px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative" ref={mapRef}>
          <img 
            src="/lovable-uploads/e7f1f77d-cfee-4560-a35c-60eeb5100feb.png" 
            alt="Vaccination Coverage Map" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
