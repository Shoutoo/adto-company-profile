'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { renderToString } from 'react-dom/server';

export default function LocationMap() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Fix Leaflet's default icon paths issue with Webpack/Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const position: [number, number] = [-6.291354587959362, 106.80360488062927];

  // Creating a custom icon that perfectly matches the brand design
  const iconHtml = renderToString(<MapPin size={36} color="white" fill="#35557A" />);
  const customIcon = L.divIcon({
    html: `<div style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); display: flex; align-items: center; justify-content: center; width: 36px; height: 36px;">${iconHtml}</div>`,
    className: 'custom-leaflet-icon',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

  return (
    <MapContainer 
      center={position} 
      zoom={16} 
      scrollWheelZoom={false}
      zoomControl={false}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 10, background: '#F8FAFC' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position} icon={customIcon}>
        <Popup className="font-sans">
          <div className="flex flex-col gap-1 p-1">
            <strong className="font-heading text-sm" style={{ color: '#35557A' }}>Talavera Office Park</strong>
            <span className="text-xs text-slate-500">
              Jl. T.B. Simatupang Kav. 22-26<br />
              Cilandak, Jakarta Selatan
            </span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
