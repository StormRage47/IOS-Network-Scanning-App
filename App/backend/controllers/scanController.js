const Scan = require('/Users/stormrage/Documents/GitHub/IOS-Network-Scanning-App/App/models/Scan');

// Yeni scan ekle
const addScan = async (req, res) => {
  try {
    const { devices } = req.body;

    if (!devices) {
      return res.status(400).json({ error: 'devices verisi eksik' });
    }

    const newScan = new Scan({
      devices
    });

    await newScan.save();

    console.log('Yeni scan kaydedildi');

    res.status(201).json({
      message: 'Scan kaydedildi',
      data: newScan
    });

  } catch (err) {
    console.log('HATA:', err);
    res.status(500).json({ error: err.message });
  }
};

// Tüm scanleri getir
const getScans = async (req, res) => {
  try {
    const scans = await Scan.find().sort({ date: -1 });

    res.json(scans);

  } catch (err) {
    console.log('HATA:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addScan,
  getScans
};