import { Pressable, StyleSheet, Text } from 'react-native';

import { FlashCar, Fonts } from '@/constants/theme';

interface FlashButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'gold';
  style?: object;
}

export function FlashButton({ title, onPress, variant = 'gold', style }: FlashButtonProps) {
  const isSecondary = variant === 'secondary';
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        variant === 'gold' && styles.gold,
        variant === 'primary' && styles.primary,
        isSecondary && styles.secondary,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSecondary && styles.textSecondary]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  gold: {
    backgroundColor: FlashCar.yellow,
  },
  primary: {
    backgroundColor: FlashCar.blue,
  },
  secondary: {
    backgroundColor: FlashCar.white,
    borderWidth: 1,
    borderColor: FlashCar.white,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  textSecondary: {
    color: '#000',
  },
});
