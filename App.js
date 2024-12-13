import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Greetings}>
        Hello!
      </Text>


      <Text style={styles.Name}>
        Raj Trusharkumar Patel
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Greetings: {
    color: "black",
    fontSize: '20',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },

  Name: {
    color: "white",
    fontSize: '20',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    justifyContent: 'center'
  }
});
