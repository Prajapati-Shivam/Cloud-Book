const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = 'mongodb+srv://Shivam:Shivam@cloud-book.jvpxco6.mongodb.net/?retryWrites=true&w=majority'
const express = require('express');

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI, () => {
  console.log('Connected to MongoDB');
})
console.log(process.env.MONGO_URI)

const app = express();

var cors = require('cors')

const port = 5000;

app.use(cors())
app.use(express.json())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
