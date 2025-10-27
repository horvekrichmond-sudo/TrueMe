// This is the Welcome / Create Identity Screen, the first entry point for new users.

import { version } from '../../package.json'; // Assumes app version is in package.json
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors, Fonts, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type WelcomeScreenProps = {
  // This prop would be passed from a higher-order component or a global state manager
  // to determine if the user has already completed onboarding.
  userOnboarded?: boolean;
  // Callbacks for parent component to handle navigation logic.
  onCreateIdentity?: () => void;
  onSignIn?: () => void;
};

export default function WelcomeScreen({
  userOnboarded = false, // Default to false for this screen's purpose
}: WelcomeScreenProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isCreating, setIsCreating] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  // In a real application, you would check the `userOnboarded` status and redirect if true.
  // For example:
  // useEffect(() => {
  //   if (userOnboarded) {
  //     router.replace('/(tabs)/'); // Redirect to the main app dashboard
  //   }
  // }, [userOnboarded, router]);

  const handleCreateIdentity = () => {
    setIsCreating(true);
    console.log('Navigating to identity creation flow...');
    // Simulate network/processing delay before navigation
    setTimeout(() => {
      // In a real app, you would navigate to the next step of the onboarding flow.
      // e.g., router.push('/onboarding/verification');
      setIsCreating(false);
    }, 500);
  };

  const handleSignIn = () => {
    setIsSigningIn(true);
    console.log('Navigating to sign-in screen...');
    setTimeout(() => {
      // In a real app, you would navigate to the sign-in modal or screen.
      // e.g., router.push('/sign-in');
      setIsSigningIn(false);
    }, 500);
  };

  type GradientColors = [string, string, ...string[]];
  const gradientColors: GradientColors =
    colorScheme === 'dark'
      ? [Colors.dark.background, Colors.dark.card, Colors.dark.background]
      : [Colors.light.background, '#FFFFFF'];

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <LinearGradient colors={gradientColors} style={StyleSheet.absoluteFill} />

      {/* A subtle background pattern to add texture and a futuristic feel */}
      <ImageBackground
        source={require('@/assets/images/checkered-light-emboss.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.02 }}
      />

      <SafeAreaView style={styles.safeArea}>
        <MotiView
          style={styles.contentContainer}
          from={{ opacity: 0, transform: [{ translateY: 24 }] }}
          animate={{ opacity: 1, transform: [{ translateY: 0 }] }}
          transition={{ type: 'timing', duration: 800, delay: 100 }}>
          <Logo width={96} height={96} />
          <ThemedText type="title" style={styles.title}>
            Welcome to TrueMe
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Your secure global identity starts here.
          </ThemedText>
        </MotiView>

        <MotiView
          style={styles.actionContainer}
          from={{ opacity: 0, transform: [{ translateY: 24 }] }}
          animate={{ opacity: 1, transform: [{ translateY: 0 }] }}
          transition={{ type: 'timing', duration: 800, delay: 300 }}>
          <Button
            title="Create My TrueMe ID"
            variant="primary"
            onPress={handleCreateIdentity}
            isLoading={isCreating}
          />
          <Button
            title="Sign In with TrueMe"
            variant="secondary"
            onPress={handleSignIn}
            isLoading={isSigningIn}
          />
          <ThemedText type="caption" style={styles.caption}>
            Your privacy is our top priority.
          </ThemedText>
        </MotiView>
      </SafeAreaView>

      <ThemedText type="caption" style={styles.versionText}>
        Version {version}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xxl,
    paddingBottom: Platform.OS === 'ios' ? Spacing.lg : Spacing.xl + Spacing.md,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.md, // Vertical gap between logo, title, and subtitle
  },
  actionContainer: {
    width: '100%',
    gap: Spacing.md, // Vertical gap between buttons
    paddingBottom: Spacing.lg,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.heading,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: Fonts.body,
  },
  caption: {
    textAlign: 'center',
    marginTop: Spacing.sm,
    opacity: 0.6,
  },
  versionText: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? Spacing.lg : Spacing.xl,
    alignSelf: 'center',
    opacity: 0.5,
    fontSize: 10,
  },
});