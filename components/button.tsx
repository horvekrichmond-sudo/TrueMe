import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  TextProps,
  ViewStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { MotiView, AnimatePresence } from 'moti';

import { ThemedText } from './themed-text'; // Assuming you have a ThemedText component
import { Spacing, Colors, Borders, Typography, Fonts} from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';

// Define the component's props with TypeScript
type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  /** The text to display inside the button. */
  title: string;
  /** The visual style of the button. */
  variant?: ButtonVariant;
  /** If true, shows a loading spinner instead of the title. */
  isLoading?: boolean;
  /**
   * Optional custom styling for the button container.
   * Can be a style object or a function that returns a style object based on the pressed state.
   */
  disabled?: boolean;
  style?: (state: PressableStateCallbackType) => ViewStyle | ViewStyle[] | undefined;
  /** Optional custom styling for the button text. */
  textStyle?: TextProps['style'];
}

export function Button({
  title,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onPress,
  style,
  textStyle,
  ...rest
}: ButtonProps) {
  const isDisabled = isLoading || disabled;

  // Use theme hooks to get dynamic colors
  const primaryBg = useThemeColor({}, 'primary');
  const primaryText = useThemeColor({}, 'text');
  const secondaryText = useThemeColor({}, 'primary');

  const handlePress = (event: any) => {
    if (!isDisabled && onPress) {
      // Provide haptic feedback for a modern, tactile feel
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress(event);
    }
  };

  const textStyles = [
    styles.textBase,
    variant === 'primary' ? variantTextStyles.primary : variantTextStyles.secondary,
    variant === 'secondary' && { color: secondaryText },
    textStyle,
  ];

  return (
    <Pressable
      style={(state) => [
        styles.base,
        variantStyles[variant],
        isDisabled && styles.disabled,
        variant === 'primary' ? { backgroundColor: primaryBg } : { borderColor: secondaryText },
        // If the passed style is a function, call it with the state. Otherwise, just use it.
        typeof style === 'function' ? style(state) : style,
        state.pressed && !isDisabled && styles.pressed,
      ]}
      onPress={handlePress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: isLoading }}
      {...rest}
    >
      <AnimatePresence>
        {isLoading ? (
          <MotiView
            style={styles.activityIndicatorContainer}
            from={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ActivityIndicator
              size="small"
              color={variant === 'primary' ? primaryText : secondaryText}
            />
          </MotiView>
        ) : (
          <MotiView
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 100 }}
          >
            <ThemedText style={textStyles}>{title}</ThemedText>
          </MotiView>
        )}
      </AnimatePresence>
    </Pressable>
  );
}

// --- STYLES ---

const styles = StyleSheet.create({
  base: {
    height: 52,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Borders.radius.lg, // 24px - for a modern, rounded look
    paddingHorizontal: Spacing.lg,
    flexDirection: 'row',
    borderWidth: Borders.width.medium,
    transitionProperty: 'transform, background-color', // for web
    transitionDuration: '150ms', // for web
  },
  textBase: {
    fontFamily: Fonts.heading,
    fontSize: Typography.body.fontSize,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    transform: [{ scale: 0.98 }], // Slight scale-down on press
  },
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: 'transparent',
  },
});

const variantTextStyles = StyleSheet.create({
  primary: {
    color: Colors.dark.text, // Use a color that contrasts with the primary background
  },
  secondary: {
    // Color is set dynamically via useThemeColor hook to match the border
  },
});