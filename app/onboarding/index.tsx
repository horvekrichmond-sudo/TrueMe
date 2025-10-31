// This is the Welcome / Create Identity Screen, the first entry point for new users.

import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { Button } from '@/components/button'; // Assuming you have a custom Button component
import { Logo } from '@/components/logo'; // Assuming you have a Logo component
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function WelcomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isCreating, setIsCreating] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleCreateIdentity = () => {
    setIsCreating(true);
    console.log('Navigating to identity creation flow...');
    // In a real app, you would navigate to the next step of the onboarding flow.
    // e.g., router.push('/onboarding/create-pin');
    setTimeout(() => {
      setIsCreating(false);
    }, 500);
  };

  const handleSignIn = () => {
    setIsSigningIn(true);
    console.log('Navigating to sign-in screen...');
    // In a real app, you would navigate to the sign-in modal or screen.
    // e.g., router.push('/sign-in');
    setTimeout(() => {
      setIsSigningIn(false);
    }, 500);
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

      <View style={styles.safeArea}>
        {/* This MotiView animates the top content into view */}
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

        {/* This MotiView animates the action buttons into view with a slight delay */}
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
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl, // Using 32px from your theme
    paddingTop: Spacing.xxl, // Using 48px from your theme
    paddingBottom: Platform.OS === 'ios' ? Spacing.lg : Spacing.xl,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.md, // Using 16px gap from your theme
  },
  actionContainer: {
    width: '100%',
    gap: Spacing.md, // Using 16px gap from your theme
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.heading, // Using 'Gotham-Medium' from your theme
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: Fonts.body, // Using 'Jost-VariableFont_wght' from your theme
  },
  caption: {
    textAlign: 'center',
    marginTop: Spacing.sm,
    opacity: 0.6,
  },
});
