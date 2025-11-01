import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Logo } from '@/components/logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export function LoadingScreen() {
  return (
    <ThemedView style={styles.container}>
      <MotiView
        from={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          type: 'timing',
          duration: 1200,
          loop: true,
          repeatReverse: true,
        }}>
        <Logo width={96} height={96} />
      </MotiView>
      <ThemedText type="subtitle" style={styles.text}>
        Initializing...
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: Spacing.lg,
    opacity: 0.8,
  },
});
