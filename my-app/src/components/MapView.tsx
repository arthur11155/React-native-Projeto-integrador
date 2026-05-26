import { StyleSheet, View } from 'react-native';

import { FlashCar } from '@/constants/theme';

interface MapViewProps {
  style?: object;
  markerLabel?: string;
  markers?: Array<{ lat: number; lng: number; label: string }>;
}

export function MapView({ style }: MapViewProps) {
  return <View style={[styles.map, style]} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#d0d0d0',
  },
});
