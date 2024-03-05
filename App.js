import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetTittle from './Components/GetTittle';

export default function App() {
  return (
    <View>
      <GetTittle/>
      <StatusBar style="auto" />
    </View>
  );
}
// AIzaSyA_dw6uJmAVV1gd2Ta1JCtU7ciOA7vIZs0

// AIzaSyBJEMszIiajj10X8ZyhQ8nb6LbUBjCmfBY
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});