const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  res.json({ message: 'Server backend attivo e funzionante!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend attivo su porta ${PORT}`);
});
