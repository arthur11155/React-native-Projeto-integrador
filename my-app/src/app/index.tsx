import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashButton } from '@/components/FlashButton';
import { FlashCar, Fonts } from '@/constants/theme';

const { width } = Dimensions.get('window');

export default function TelaInicial() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.loginText} onPress={() => {}}>Login</Text>
      </View>

      <View style={styles.heroSection}>
        <View style={styles.blueBg}>
          <View style={styles.cloud1} />
          <View style={styles.cloud2} />
          <View style={styles.sun} />
          <View style={styles.car} />
          <View style={styles.locationPin} />
        </View>
      </View>

      <Text style={styles.title}>VENHA FAZER PARTE DO TIME HELPCAR</Text>

      <View style={styles.buttonSection}>
        <FlashButton title="PEÇA UMA CARONA" onPress={() => router.push('/cadastro/step1')} />
        <FlashButton
          title="SEJA UM MOTORISTA"
          variant="secondary"
          onPress={() => {}}
          style={styles.motoristaBtn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FlashCar.white,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  loginText: {
    fontFamily: Fonts.sans,
    fontWeight: '400',
    fontSize: 18,
    color: '#000',
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  blueBg: {
    width: width * 1.2,
    height: 300,
    backgroundColor: FlashCar.blue,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  sun: {
    position: 'absolute',
    top: 30,
    right: 80,
    width: 77,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFCC00',
  },
  cloud1: {
    position: 'absolute',
    top: 50,
    left: 30,
    width: 113,
    height: 60,
    backgroundColor: FlashCar.white,
    opacity: 0.8,
    borderRadius: 30,
  },
  cloud2: {
    position: 'absolute',
    top: 30,
    left: 140,
    width: 93,
    height: 50,
    backgroundColor: FlashCar.white,
    opacity: 0.7,
    borderRadius: 25,
  },
  car: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    width: 280,
    height: 90,
    backgroundColor: FlashCar.white,
    borderRadius: 20,
  },
  locationPin: {
    position: 'absolute',
    bottom: -20,
    right: 60,
    width: 70,
    height: 90,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  title: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 30,
  },
  buttonSection: {
    paddingHorizontal: 40,
    marginTop: 40,
    gap: 16,
  },
  motoristaBtn: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
