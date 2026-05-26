import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCarHeader } from '@/components/FlashCarHeader';
import { FlashButton } from '@/components/FlashButton';
import { FormInput } from '@/components/FormInput';
import { StepIndicator } from '@/components/StepIndicator';
import { FlashCar, Fonts } from '@/constants/theme';

export default function CadastroStep4() {
  const router = useRouter();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataExpiracao, setDataExpiracao] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlashCarHeader title="JUNTE-SE A NÓS" subtitle="E venha fazer parte da maior campanha de inclusão do país!" />
      <ScrollView style={styles.form}>
        <Text style={styles.sectionTitle}>PAGAMENTO</Text>
        <StepIndicator currentStep={4} />

        <FormInput label="NOME COMPLETO" value={nomeCompleto} onChangeText={setNomeCompleto} />
        <FormInput label="NÚMERO DO CARTÃO" value={numeroCartao} onChangeText={setNumeroCartao} />

        <View style={styles.inputRow}>
          <FormInput label="DATA DE EXPIRAÇÃO" value={dataExpiracao} onChangeText={setDataExpiracao} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="CVV" value={cvv} onChangeText={setCvv} halfWidth />
        </View>

        <View style={styles.navRow}>
          <FlashButton title="<" onPress={() => router.back()} variant="primary" style={styles.navBtn} />
          <FlashButton title=">" onPress={() => router.push('/cadastro/step5')} variant="primary" style={styles.navBtn} />
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
  sectionTitle: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 13,
    color: FlashCar.textDark,
    textAlign: 'center',
    marginTop: 12,
    textTransform: 'uppercase',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  navBtn: {
    width: 50,
    height: 40,
    borderRadius: 8,
  },
});
