import { StyleSheet, Text, TextInput, View } from 'react-native';

import { FlashCar, Fonts } from '@/constants/theme';

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  halfWidth?: boolean;
}

export function FormInput({ label, value, onChangeText, placeholder, secureTextEntry, halfWidth }: FormInputProps) {
  return (
    <View style={[styles.container, halfWidth && styles.halfWidth]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={FlashCar.inputGray}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flex: 1,
  },
  halfWidth: {
    maxWidth: '48%',
  },
  label: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 12,
    color: FlashCar.textDark,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  input: {
    height: 29,
    backgroundColor: FlashCar.inputGray,
    borderRadius: 0,
    paddingHorizontal: 8,
    fontFamily: Fonts.sans,
    fontSize: 12,
    color: '#000',
  },
});
