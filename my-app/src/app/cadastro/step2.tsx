import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FlashCarHeader } from '@/components/FlashCarHeader';
import { FlashButton } from '@/components/FlashButton';
import { FormInput } from '@/components/FormInput';
import { StepIndicator } from '@/components/StepIndicator';
import { FlashCar, Fonts } from '@/constants/theme';

export default function CadastroStep2() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlashCarHeader title="JUNTE-SE A NÓS" subtitle="E venha fazer parte da maior campanha de inclusão do país!" />
      <ScrollView style={styles.form}>
        <Text style={styles.sectionTitle}>DADOS DE LOGIN</Text>
        <StepIndicator currentStep={2} />

        <FormInput label="EMAIL" value={email} onChangeText={setEmail} />
        <FormInput label="SENHA" value={senha} onChangeText={setSenha} secureTextEntry />
        <FormInput label="CONFIRMAR SENHA" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry />

        <View style={styles.navRow}>
          <FlashButton title="<" onPress={() => router.back()} variant="primary" style={styles.navBtn} />
          <FlashButton title=">" onPress={() => router.push('/cadastro/step3')} variant="primary" style={styles.navBtn} />
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
