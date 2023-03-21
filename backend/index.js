const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/cloud-book';
const express = require('express');


const app = express();
const port = 5000;

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, () => {
  console.log('Connected to MongoDB');
})