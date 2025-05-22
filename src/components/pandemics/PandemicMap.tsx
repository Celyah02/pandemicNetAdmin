
import React from 'react';

export function PandemicMap() {
  return (
    <div className="h-[300px] w-full bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/74332416-5ec7-4bdc-acaa-60e5c433c1cf.png" 
          alt="Pandemic Map" 
          className="max-h-[300px] object-contain"
          style={{ 
            clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 8% 86%, 0% 50%, 8% 14%)' 
          }}
        />
      </div>
    </div>
  );
}
