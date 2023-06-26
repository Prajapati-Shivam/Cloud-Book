const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const path = require('path');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.REACT_APP_MONGO_URI)
const app = express();

var cors = require('cors')

const port = 5000;

app.use(cors())
app.use(express.json())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
