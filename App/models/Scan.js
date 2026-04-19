const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  devices: [
    {
      ip: String,
      name: String
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Scan', scanSchema, 'scans');