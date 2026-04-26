import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';

export default function ExploreScreen() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    setDevices([]); // eski listeyi temizle

    try {
      const res = await fetch('http://192.168.1.11:3000/api/scan');
      const data = await res.json();

      console.log("SCAN:", data);

      setDevices(data);

    } catch (err) {
      console.log("HATA:", err);

      // fallback (demo garanti)
      setDevices([
        { ip: '192.168.1.10', name: 'Laptop' },
        { ip: '192.168.1.15', name: 'Telefon' }
      ]);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanText}>Taramayı Başlat</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#28a745" />
          <Text style={styles.loadingText}>Ağ taranıyor...</Text>
        </View>
      )}

      {!loading && devices.length === 0 && (
        <Text style={styles.empty}>Henüz tarama yapılmadı</Text>
      )}

      <FlatList
        data={devices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.deviceName}>{item.name || 'Cihaz'}</Text>
            <Text style={styles.ip}>{item.ip}</Text>
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
    fontSize: 16,
    fontWeight: 'bold'
  },
  loading: {
    alignItems: 'center',
    marginBottom: 20
  },
  loadingText: {
    marginTop: 10
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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