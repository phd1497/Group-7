import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <Text style={styles.names}>And My name is Hoang Dat Phan</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dda15e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  names:{
    padding: 10,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    color:'blue',
  }
});
