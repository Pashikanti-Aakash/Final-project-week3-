const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5001;
const DB_URI = 'mongodb+srv://aakashchandra2004:Aakash%402004@userdetails.79qz8.mongodb.net/musicPlayer'; 


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'upload/song')));
app.use('/url', express.static(path.join(__dirname, 'upload/songaudio')));

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


app.use('/', authRoutes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
