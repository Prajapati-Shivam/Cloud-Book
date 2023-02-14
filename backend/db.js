const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';

// const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToMongo = () => {
  mongoose.connect(mongoURI, ()=>{
    console.log('connected')
  })
}

module.exports = connectToMongo;