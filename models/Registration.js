const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Registration', registrationSchema, 'users');