const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const scanRoutes = require('./routes/scanRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// 🔥 TEK CONNECT
mongoose.set('bufferCommands', false);

mongoose.connect('mongodb+srv://azboysuleyman2054_db_user:xMEQh4xQreBARtHB@cluster0.pgvueqy.mongodb.net/networkdb?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB bağlandı');

    // 🔥 SADECE BURADA SERVER BAŞLASIN
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server ${PORT} portunda çalışıyor`);
    });

  })
  .catch(err => {
    console.log('DB Hata:', err);
  });

// routes
app.use('/api', scanRoutes);

// test endpoint
app.get('/', (req, res) => {
  res.send('API çalışıyor');
});

// hata dinleyici
mongoose.connection.on('error', err => {
  console.log('Mongoose bağlantı hatası:', err);
});