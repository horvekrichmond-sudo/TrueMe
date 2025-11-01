import { StyleSheet, ImageBackground } from 'react-native';

import Dashboardbg from '@/assets/images/gradient.png';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Reputation = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.text}>
          TrueMe Reputation Center
        </ThemedText>
    </ThemedView>
  );
};

export default Reputation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
