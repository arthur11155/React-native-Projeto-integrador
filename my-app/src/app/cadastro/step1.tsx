import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCarHeader } from '@/components/FlashCarHeader';
import { FlashButton } from '@/components/FlashButton';
import { FormInput } from '@/components/FormInput';
import { StepIndicator } from '@/components/StepIndicator';
import { FlashCar, Fonts } from '@/constants/theme';

export default function CadastroStep1() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [pcd, setPcd] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlashCarHeader title="JUNTE-SE A NÓS" subtitle="E venha fazer parte da maior campanha de inclusão do país!" />
      <ScrollView style={styles.form}>
        <Text style={styles.sectionTitle}>DADOS PESSOAIS</Text>
        <StepIndicator currentStep={1} />

        <View style={styles.inputRow}>
          <FormInput label="NOME" value={nome} onChangeText={setNome} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="SOBRENOME" value={sobrenome} onChangeText={setSobrenome} halfWidth />
        </View>

        <View style={styles.inputRow}>
          <FormInput label="CPF" value={cpf} onChangeText={setCpf} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="GÊNERO" value={genero} onChangeText={setGenero} halfWidth />
        </View>

        <View style={styles.inputRow}>
          <FormInput label="DATA DE NASCIMENTO" value={dataNasc} onChangeText={setDataNasc} halfWidth />
          <View style={{ width: 12 }} />
          <FormInput label="PCD" value={pcd} onChangeText={setPcd} halfWidth />
        </View>

        <View style={styles.navRow}>
          <FlashButton title="<" onPress={() => router.back()} variant="primary" style={styles.navBtn} />
          <FlashButton title=">" onPress={() => router.push('/cadastro/step2')} variant="primary" style={styles.navBtn} />
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
