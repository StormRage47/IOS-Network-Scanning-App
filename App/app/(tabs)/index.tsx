import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Network Scanner</Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push('/explore')}
      >
        <Text style={styles.buttonText}>Ağı Tara</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.push('/history')}
      >
        <Text style={styles.secondaryText}>Geçmiş Tarama</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40
  },
  primaryButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 12,
    width: 220,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  secondaryButton: {
    padding: 10
  },
  secondaryText: {
    color: '#555'
  }
});