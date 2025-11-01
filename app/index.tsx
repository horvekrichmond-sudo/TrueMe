import { Redirect, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '@/components/loading-screen';

// This is a placeholder for a real authentication check.
// In a real app, you would use something like AsyncStorage or a secure store
// to check if the user has an active session or has completed onboarding.
async function checkUserStatus(): Promise<'onboarded' | 'new-user'> {
  // Simulate a network request or storage check.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // For demonstration, we'll randomly decide. In a real app, this would be a real check.
  const hasOnboarded = Math.random() > 0.5;

  if (hasOnboarded) {
    return 'onboarded';
  }
  return 'new-user';
}

export default function Index() {
  const [userStatus, setUserStatus] = useState<'loading' | 'onboarded' | 'new-user'>('loading');

  useEffect(() => {
    checkUserStatus().then((status) => {
      setUserStatus(status);
      // Now that we have the status, we can hide the native splash screen
      SplashScreen.hideAsync();
    });
  }, []);

  if (userStatus === 'loading') {
    // While we're checking the user's status, we can show a loading component.
    // The native splash screen is still visible underneath until we call hideAsync.
    // Returning null is also an option to just show the splash screen.
    return <LoadingScreen />;
  }

  if (userStatus === 'new-user') {
    // If the user is new, redirect to the onboarding flow.
    return <Redirect href="/onboarding" />;
  }

  // If the user has already onboarded, go directly to the main app.
  return <Redirect href="/dashboard" />;
}
