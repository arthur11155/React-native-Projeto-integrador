import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCar, Fonts } from '@/constants/theme';
import { MapView } from '@/components/MapView';

const menuItems = [
  { icon: '🌐', label: 'PORTUGUÊS' },
  { icon: '📍', label: 'RECIFE PE' },
  { icon: '💬', label: 'MENSAGENS' },
  { icon: '🚗', label: 'CORRIDAS' },
  { icon: '⭐', label: 'AVALIAÇÕES' },
];

const locations = [
  { name: 'COLÉGIOS UNIVAP, CENTRO' },
  { name: 'INSTITUTO ALPHA LUMEN, JARDIM ESPLANADA' },
  { name: 'INSTITUTO TECNOLÓGICO DE AERONAUTICA, VILA DAS ACÁCIAS' },
];

export default function PerfilPedinte() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mapArea}>
        <MapView style={{ flex: 1 }} />
      </View>

      <View style={styles.sidebar}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder} />
          <Text style={styles.profileName}>ALEX FERNANDES</Text>
          <Text style={styles.profileInfo}>24 ANOS | ESTUDANTE</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item, i) => (
            <View key={i}>
              <View style={styles.menuItem}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              {i < menuItems.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        <Text style={styles.disconnect} onPress={() => router.push('/')}>
          DESCONECTAR
        </Text>
      </View>

      <View style={styles.infoPanel}>
        <View style={styles.panelHeader}>
          <View style={styles.goldLine} />
        </View>
        {locations.map((loc, i) => (
          <View key={i} style={styles.locationRow}>
            <View style={styles.dot} />
            <Text style={styles.locationText}>{loc.name}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FlashCar.lightGray,
  },
  mapArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '78%',
    backgroundColor: '#e8e8e8',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 224,
    height: '100%',
    backgroundColor: FlashCar.lightGray,
    paddingTop: 20,
  },
  profileHeader: {
    backgroundColor: FlashCar.blue,
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: FlashCar.white,
    marginBottom: 8,
  },
  profileName: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 12,
    color: FlashCar.white,
    textAlign: 'center',
  },
  profileInfo: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 12,
    color: FlashCar.white,
    textAlign: 'center',
    opacity: 0.8,
  },
  menuList: {
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  menuIcon: {
    fontSize: 18,
    width: 30,
  },
  menuLabel: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 12,
    color: FlashCar.textDark,
    letterSpacing: 1.2,
  },
  divider: {
    height: 1,
    backgroundColor: FlashCar.divider,
    opacity: 0.47,
  },
  disconnect: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 12,
    color: FlashCar.textDark,
    letterSpacing: 1.2,
    paddingHorizontal: 20,
    marginTop: 24,
  },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: FlashCar.cardBg,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
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
