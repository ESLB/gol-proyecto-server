var mongoose = require('mongoose');

var Reto = mongoose.model('Reto', {
  equipoRetador: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  equipoRetado: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  locacion: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  estadoReto: {
    type: Number,
    default: 0
  }
});

module.exports = {Reto};