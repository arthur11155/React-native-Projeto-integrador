import { StyleSheet, Text, View } from 'react-native';

import { FlashCar, Fonts } from '@/constants/theme';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

export function StepIndicator({ currentStep, totalSteps = 4 }: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isActive = stepNum <= currentStep;
        return (
          <View key={i} style={styles.stepRow}>
            {i > 0 && <View style={[styles.line, isActive && styles.lineActive]} />}
            <View style={[styles.circle, isActive && styles.circleActive]}>
              <Text style={[styles.number, isActive && styles.numberActive]}>{stepNum}</Text>
            </View>
            {i < totalSteps - 1 && <View style={[styles.line, , isActive && stepNum < currentStep ? styles.lineActive : null]} />}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: FlashCar.inputGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    backgroundColor: FlashCar.yellow,
  },
  number: {
    fontFamily: Fonts.sans,
    fontWeight: '700',
    fontSize: 20,
    color: FlashCar.white,
  },
  numberActive: {
    color: '#000',
  },
  line: {
    width: 43,
    height: 2,
    backgroundColor: FlashCar.inputGray,
    marginHorizontal: 0,
  },
  lineActive: {
    backgroundColor: FlashCar.yellow,
  },
});
