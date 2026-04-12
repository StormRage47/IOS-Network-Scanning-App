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

app.listen(3000, () => {
  console.log('Server 3000 portunda çalışıyor');
}); 