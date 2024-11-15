const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "muallif nomi talab qilinadi"],
  },
  birthDeath: {
    type: String,
    required: true,
  },
  booksCount: {
    type: Number,
    default: 0,
  }
});

module.exports = mongoose.model('Author', authorSchema);
