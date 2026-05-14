import { StyleSheet, View } from 'react-native';
import Presentacion from './components/Presentacion'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App () {
  return (
  <SafeAreaProvider>
    <View style={styles.container}> 
      <Presentacion/>
    </View>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
