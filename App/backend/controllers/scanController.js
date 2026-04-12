let scans = []; // geçici veri

// scan ekle
const addScan = (req, res) => {
  const data = req.body;

  scans.push({
    ...data,
    date: new Date()
  });

  console.log("Yeni scan:", data);

  res.json({ message: 'Scan kaydedildi' });
};

// scanları getir
const getScans = (req, res) => {
  res.json(scans);
};

module.exports = {
  addScan,
  getScans
};