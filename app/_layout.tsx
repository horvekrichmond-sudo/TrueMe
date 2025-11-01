import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, Fonts } from '@/constants/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Define theme-aware screen options for the Stack navigator
  const screenOptions = {
    headerStyle: {
      backgroundColor: Colors[colorScheme ?? 'light'].background,
    },
    headerTintColor: Colors[colorScheme ?? 'light'].text,
    headerTitleStyle: {
      fontFamily: Fonts.heading,
    },
  };

  return (
    // ThemeProvider makes the navigation components theme-aware.
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Information' }} />
      </Stack>
    </ThemeProvider>
  );
}
