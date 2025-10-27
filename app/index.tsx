import { Redirect } from 'expo-router';

export default function RootIndex() {
  // This component automatically redirects to the onboarding screen.
  return <Redirect href="/onboarding" />;
}