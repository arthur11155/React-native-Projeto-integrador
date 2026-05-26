import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { FlashCar, Fonts } from '@/constants/theme';

const { width } = Dimensions.get('window');

interface FlashCarHeaderProps {
  title: string;
  subtitle?: string;
}

export function FlashCarHeader({ title, subtitle }: FlashCarHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.blueBg} />
      <View style={styles.curveBg} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    overflow: 'hidden',
  },
  blueBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    backgroundColor: FlashCar.blue,
  },
  curveBg: {
    position: 'absolute',
    top: 140,
    left: -60,
    right: -60,
    height: 180,
    backgroundColor: FlashCar.blue,
    borderRadius: 600,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 25,
    color: FlashCar.white,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.sans,
    fontWeight: '400',
    fontSize: 17,
    color: FlashCar.white,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 40,
  },
});
