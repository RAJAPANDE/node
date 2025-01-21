const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  mobileNo: { 
    type: String, 
    required: true, 
    match: /^[0-9]{10}$/, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    unique: true 
  },
  address: {
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    country: { type: String, trim: true },
  },
  loginId: { 
    type: String, 
    required: true, 
    minlength: 8, 
    match: /^[a-zA-Z0-9]+$/, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 6, 
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ 
  },
  creationTime: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
