import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCarHeader } from '@/components/FlashCarHeader';
import { FlashButton } from '@/components/FlashButton';
import { FlashCar, Fonts } from '@/constants/theme';

export default function CadastroStep5() {
  const router = useRouter();
  const [aceito1, setAceito1] = useState(false);
  const [aceito2, setAceito2] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <FlashCarHeader title="JUNTE-SE A NÓS" subtitle="E venha fazer parte da maior campanha de inclusão do país!" />
      <ScrollView style={styles.form}>
        <Text style={styles.title}>TERMOS E CONDIÇÕES</Text>

        <View style={styles.termsBox}>
          <Text style={styles.termsText}>
            Clique em "Aceito" para confirmar que leu, compreendeu e concorda com os termos e condições abaixo
          </Text>
          <View style={styles.divider} />

          <Pressable style={styles.checkRow} onPress={() => setAceito1(!aceito1)}>
            <View style={[styles.checkbox, aceito1 && styles.checkboxActive]} />
            <Text style={styles.checkLabel}>
              Permito que esse website colete e armazene os dados digitados preenchidos neste formulário. *
            </Text>
          </Pressable>

          <Pressable style={styles.checkRow} onPress={() => setAceito2(!aceito2)}>
            <View style={[styles.checkbox, aceito2 && styles.checkboxActive]} />
            <Text style={styles.checkLabel}>Enviar essas credenciais via email.</Text>
          </Pressable>
        </View>

        <View style={styles.navRow}>
          <FlashButton title="<" onPress={() => router.back()} variant="primary" style={styles.navBtn} />
          <FlashButton
            title="ENVIAR"
            variant="gold"
            onPress={() => router.push('/location')}
            style={styles.sendBtn}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FlashCar.white,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 20,
    color: FlashCar.textDark,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  termsBox: {
    backgroundColor: FlashCar.inputGray,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  termsText: {
    fontFamily: Fonts.sans,
    fontSize: 11,
    color: FlashCar.textDark,
    lineHeight: 16,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: FlashCar.divider,
    marginBottom: 12,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkbox: {
    width: 14,
    height: 14,
    backgroundColor: FlashCar.inputGray,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 2,
    marginRight: 10,
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: FlashCar.blue,
    borderColor: FlashCar.blue,
  },
  checkLabel: {
    fontFamily: Fonts.sans,
    fontSize: 10,
    color: FlashCar.textDark,
    flex: 1,
    lineHeight: 16,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  navBtn: {
    width: 50,
    height: 40,
    borderRadius: 8,
  },
  sendBtn: {
    flex: 1,
    marginLeft: 16,
    height: 40,
    backgroundColor: FlashCar.yellowDark,
  },
});
