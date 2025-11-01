import { StyleSheet, ImageBackground } from 'react-native';

import Dashboardbg from '@/assets/images/gradient.png';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Verification = () => {
  return (
    <ThemedView style={styles.container}>
      <ImageBackground source={Dashboardbg} resizeMode="cover" style={styles.image}>
        <ThemedText type="title" style={styles.text}>
          TrueMe Verification Center
        </ThemedText>
      </ImageBackground>
    </ThemedView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
