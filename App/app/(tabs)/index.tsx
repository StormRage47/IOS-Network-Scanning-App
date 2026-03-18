import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [target, setTarget] = useState('');

  const handleScan = () => {
    console.log('Scanning:', target);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Network Scanner</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter IP or Domain"
        placeholderTextColor="#888"
        value={target}
        onChangeText={setTarget}
      />

      <TouchableOpacity style={styles.button} onPress={handleScan}>
        <Text style={styles.buttonText}>Start Scan</Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>Scan results will appear here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#58a6ff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#161b22',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#238636',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resultBox: {
    backgroundColor: '#161b22',
    padding: 20,
    borderRadius: 10,
  },
  resultText: {
    color: '#8b949e',
  },
});