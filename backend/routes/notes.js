const express = require('express');
const router = express.Router();

router.get('api/notes', (req, res) => {
  res.send("Hello World!");
})

module.exports = router;