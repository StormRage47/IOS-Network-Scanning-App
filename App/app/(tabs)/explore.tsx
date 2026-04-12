import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function ScanScreen() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const sendToBackend = async (devices: any[]) => {
    try {
        await fetch('http://192.168.1.14:3000/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ devices })
      });
    } catch (err) {
      console.log(err);
    }
  };
console.log("DEVICES:", devices);
const handleScan = () => {
  setLoading(true);

  setTimeout(() => {
    const fakeData = [
      { id: '1', ip: "192.168.1.10", name: "Laptop" },
      { id: '2', ip: "192.168.1.15", name: "Telefon" },
      { id: '3', ip: "192.168.1.20", name: "Printer" }
    ];

    setDevices(fakeData);
    setLoading(false);

    // 🔥 await YOK
    sendToBackend(fakeData);

  }, 1500);
};
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanText}>Taramayı Başlat</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#28a745" />
          <Text style={styles.loadingText}>Ağ taranıyor...</Text>
        </View>
      )}

      {!loading && (
        <FlatList
          data={devices}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.deviceName}>{item.name}</Text>
              <Text style={styles.ip}>{item.ip}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Henüz tarama yapılmadı</Text>
          }
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20
  },
  scanButton: {
    marginTop: 40,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20
  },
  scanText: {
    color: '#fff',
    fontSize: 16
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  loadingText: {
    marginTop: 10,
    color: '#555'
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888'
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ip: {
    color: '#666'
  }
});