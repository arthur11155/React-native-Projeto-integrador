import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCar, Fonts } from '@/constants/theme';
import { MapView } from '@/components/MapView';

const locations = [
  { name: 'COLÉGIO SENAC MEDIOTEC' },
  { name: 'HOSPITAL JOANA BEZERRA' },
  { name: 'PROCAPE' },
];

export default function LocalizacaoPedinte() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapArea}>
        <MapView style={{ flex: 1 }} markers={[
          { lat: -8.0476, lng: -34.877, label: 'COLÉGIO SENAC MEDIOTEC' },
          { lat: -8.057, lng: -34.88, label: 'HOSPITAL JOANA BEZERRA' },
          { lat: -8.0628, lng: -34.871, label: 'PROCAPE' },
        ]} />
        <View style={styles.menuOverlay}>
          <Text style={styles.menuBtn} onPress={() => router.push('/profile')}>☰</Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <Text style={styles.searchIconText}>🔍</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="ONDE VOCÊ DESEJA IR?"
          placeholderTextColor={FlashCar.textMedium}
        />
      </View>

      <ScrollView style={styles.infoPanel}>
        <View style={styles.panelHeader}>
          <View style={styles.goldLine} />
        </View>
        {locations.map((loc, i) => (
          <View key={i} style={styles.locationRow}>
            <View style={styles.dot} />
            <Text style={styles.locationText}>{loc.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FlashCar.lightGray,
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  menuOverlay: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  menuBtn: {
    fontSize: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: FlashCar.cardBg,
    marginHorizontal: 20,
    marginTop: -28,
    borderRadius: 20,
    paddingLeft: 12,
    height: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  searchIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: FlashCar.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  searchIconText: {
    fontSize: 14,
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 10,
    color: FlashCar.textDark,
    height: 40,
  },
  infoPanel: {
    backgroundColor: FlashCar.cardBg,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    maxHeight: 280,
  },
  panelHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  goldLine: {
    width: 100,
    height: 3,
    backgroundColor: FlashCar.gold,
    borderRadius: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: FlashCar.blueDark,
    marginRight: 12,
  },
  locationText: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 10,
    color: FlashCar.textMedium,
  },
});
