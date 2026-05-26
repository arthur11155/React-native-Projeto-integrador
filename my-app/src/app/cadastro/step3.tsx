import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCarHeader } from '@/components/FlashCarHeader';
import { FlashButton } from '@/components/FlashButton';
import { FormInput } from '@/components/FormInput';
import { StepIndicator } from '@/components/StepIndicator';
import { FlashCar, Fonts } from '@/constants/theme';

export default function CadastroStep3() {
  const router = useRouter();
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlashCarHeader title="JUNTE-SE A NÓS" subtitle="E venha fazer parte da maior campanha de inclusão do país!" />
      <ScrollView style={styles.form}>
        <Text style={styles.sectionTitle}>DADOS DE CORRESPONDÊNCIA</Text>
        <StepIndicator currentStep={3} />

        <View style={styles.inputRow}>
          <FormInput label="ESTADO" value={estado} onChangeText={setEstado} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="BAIRRO" value={bairro} onChangeText={setBairro} halfWidth />
        </View>

        <View style={styles.inputRow}>
          <FormInput label="CIDADE" value={cidade} onChangeText={setCidade} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="NÚMERO" value={numero} onChangeText={setNumero} halfWidth />
        </View>

        <View style={styles.inputRow}>
          <FormInput label="ENDEREÇO" value={endereco} onChangeText={setEndereco} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="COMPLEMENTO" value={complemento} onChangeText={setComplemento} halfWidth />
        </View>

        <View style={styles.navRow}>
          <FlashButton title="<" onPress={() => router.back()} variant="primary" style={styles.navBtn} />
          <FlashButton title=">" onPress={() => router.push('/cadastro/step4')} variant="primary" style={styles.navBtn} />
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
