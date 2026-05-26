import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro/step1" />
      <Stack.Screen name="cadastro/step2" />
      <Stack.Screen name="cadastro/step3" />
      <Stack.Screen name="cadastro/step4" />
      <Stack.Screen name="cadastro/step5" />
      <Stack.Screen name="location" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
