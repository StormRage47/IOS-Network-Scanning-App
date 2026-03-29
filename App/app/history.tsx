import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarama Geçmişi</Text>

      <View style={styles.card}>
        <Text>192.168.1.10 - Laptop</Text>
        <Text style={styles.date}>12.04.2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  },
  date: {
    color: '#888',
    marginTop: 5
  }
});