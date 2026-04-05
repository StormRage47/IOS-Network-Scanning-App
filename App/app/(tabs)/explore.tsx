import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

export default function ScanScreen() {
  const [devices, setDevices] = useState<any[]>([]);

  const handleScan = () => {
    const fakeData = [
      { id: '1', ip: "192.168.1.10", name: "Laptop" },
      { id: '2', ip: "192.168.1.15", name: "Telefon" },
      { id: '3', ip: "192.168.1.20", name: "Printer" }
    ];
    setDevices(fakeData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <Text style={styles.scanText}>Taramayı Başlat</Text>
      </TouchableOpacity>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.deviceName}>{item.name}</Text>
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
    marginTop: 40 ,
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