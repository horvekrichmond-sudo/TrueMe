import { Image, ImageProps } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * The source for the logo image.
 * Using require ensures the image is bundled with the app.
 */
const logoSource = require('@/assets/images/icon.png');

type LogoProps = Omit<ImageProps, 'source'> & {
  width?: number;  // Add width prop
  height?: number; // Add height prop
};


/**
 * A reusable component to display the application logo.
 * It uses expo-image for optimized image loading.
 */
export function Logo(props: LogoProps) {
  // The 'style' prop from the user is combined with the base style.
  const { style, ...rest } = props;
  return <Image source={logoSource} style={[styles.logo, style, { width: props.width, height: props.height }]} {...rest} />;
}

const styles = StyleSheet.create({
  logo: {
    // Base styles for the logo can go here if needed
  },
});