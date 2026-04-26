const { exec } = require('child_process');
const Scan = require('/Users/stormrage/Documents/GitHub/IOS-Network-Scanning-App/App/models/Scan');

const runScan = (req, res) => {
  exec('nmap -sn -PR -PS -n 192.168.1.0/24', async (error, stdout, stderr) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Scan başarısız' });
    }

    const lines = stdout.split('\n');
    const devices = [];

    lines.forEach(line => {
      if (line.includes('Nmap scan report for')) {
        const ip = line.split(' ').pop();

        devices.push({
          ip: ip,
          name: 'Device'
        });
      }
    });

    try {
      const newScan = new Scan({ devices });
      await newScan.save();

      res.json(devices);

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

module.exports = { runScan };

const mongoose = require('mongoose');

console.log("DB STATE:", mongoose.connection.readyState);