import { Redirect } from 'expo-router';

export default function Index() {
  // This component will automatically redirect to the onboarding screen.
  return <Redirect href="/onboarding" />;
}
