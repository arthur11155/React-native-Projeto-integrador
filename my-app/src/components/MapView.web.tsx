import 'leaflet/dist/leaflet.css';

import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface MapViewProps {
  style?: object;
  markerLabel?: string;
  markers?: Array<{ lat: number; lng: number; label: string }>;
}

export function MapView({ style, markers }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const LRef = useRef<any>(null);
  const markerRefs = useRef<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapRef.current || mapInstance.current) return;

    const loadMap = async () => {
      const L = await import('leaflet');
      LRef.current = L;

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapRef.current!, {
        center: [-8.0476, -34.877],
        zoom: 13,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      if (markers) {
        markers.forEach((m) => {
          const marker = L.marker([m.lat, m.lng]).addTo(map).bindPopup(m.label);
          markerRefs.current.push(marker);
        });
      }

      mapInstance.current = map;
    };

    loadMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      markerRefs.current = [];
      LRef.current = null;
    };
  }, [isClient]);

  useEffect(() => {
    if (!mapInstance.current || !LRef.current || !markers) return;
    const L = LRef.current;

    markerRefs.current.forEach((m: any) => m.remove());
    markerRefs.current = [];

    markers.forEach((m) => {
      const marker = L.marker([m.lat, m.lng]).addTo(mapInstance.current!).bindPopup(m.label);
      markerRefs.current.push(marker);
    });
  }, [markers]);

  return <View style={[styles.map, style]} ref={mapRef as any} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#d0d0d0',
  },
});
