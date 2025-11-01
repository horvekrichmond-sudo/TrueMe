import { StyleSheet, ImageBackground, useColorScheme } from 'react-native';

import Dashboardbg from '@/assets/images/gradient.png';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors,Typography } from '@/constants/theme';

const Dashboard = () => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView style={styles.container}>   
        <ThemedText type="title" style={[styles.text, { backgroundColor: Colors[colorScheme].overlay }]}>
          TrueMe Dashboard Home
        </ThemedText>  
    </ThemedView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',

  },
});
