const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Create a user 
// POST '/api/auth/createuser/'
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 5 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ error: "Sorry, this email is already registered" })
  }
  user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  res.json(user)
})

module.exports = router;
