const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const scanRoutes = require('./routes/scanRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://azboysuleyman2054_db_user:xMEQh4xQreBARtHB@cluster0.pgvueqy.mongodb.net/networkdb?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB bağlandı'))
  .catch(err => console.log('DB Hata:', err));

// route
app.use('/api', scanRoutes);

// test endpoint
app.get('/', (req, res) => {
  res.send('API çalışıyor');
});

// server başlat
const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});

mongoose.connect('mongodb+srv://azboysuleyman2054_db_user:xMEQh4xQreBARtHB@cluster0.pgvueqy.mongodb.net/networkdb?retryWrites=true&w=majority')
  .then(() => {
    console.log("✅ Gerçekten bağlandık kanki, veri akışı hazır!");
  })
  .catch((err) => {
    console.error("❌ AHAN DA HATA BURADA:");
    console.error(err.message);
    if (err.message.includes('IP')) {
      console.log("👉 IP izni hala aktif olmamış veya yanlış.");
    }
  });

// Bağlantı koparsa veya hata verirse anında yakalamak için:
mongoose.connection.on('error', err => {
  console.log('Mongoose bağlantı hatası:', err);
});