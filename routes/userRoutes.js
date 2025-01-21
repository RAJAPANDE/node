const express = require('express');
const User = require('../models/user.js');
const router = express.Router();

// Save User Data
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ success: true, message: 'User saved successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Retrieve User Data
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
