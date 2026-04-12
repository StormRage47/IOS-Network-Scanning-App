import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function HistoryScreen() {
  const [scans, setScans] = useState<any[]>([]);

  const fetchScans = async () => {
    try {
      const res = await fetch('http://192.168.1.14:3000/api/scans');
      const data = await res.json();
      setScans(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchScans();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarama Geçmişi</Text>

      <FlatList
        data={scans}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{JSON.stringify(item.devices)}</Text>
            <Text style={styles.date}>
              {new Date(item.date).toLocaleString()}
            </Text>
          </View>
        )}
      />
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