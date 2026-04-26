import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function HistoryScreen() {
  const [scans, setScans] = useState<any[]>([]);

  const fetchScans = async () => {
    try {
      const res = await fetch('http://192.168.1.11:3000/api/scans');
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
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            {item.devices.map((device, index) => (
              <View key={index} style={styles.deviceRow}>
                <Text style={styles.deviceName}>{device.name}</Text>
                <Text style={styles.ip}>{device.ip}</Text>
              </View>
            ))}

            <Text style={styles.date}>
              {new Date(item.date).toLocaleString()}
            </Text>

          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Henüz kayıt yok</Text>
        }
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
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  deviceName: {
    fontWeight: 'bold'
  },
  ip: {
    color: '#555'
  },
  date: {
    marginTop: 10,
    fontSize: 12,
    color: '#888'
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  }
});

