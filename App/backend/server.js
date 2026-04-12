const express = require('express');
const cors = require('cors');

const scanRoutes = require('./routes/scanRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api', scanRoutes);

app.get('/', (req, res) => {
  res.send('API çalışıyor');
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});