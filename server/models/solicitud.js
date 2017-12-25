var mongoose = require('mongoose');

var Solicitud = mongoose.model('Solicitud', {
  jugador: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  equipoSolicitado: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  estadoSolicitud: {
    type: Number,
    default: 0
  }
});

module.exports = {Solicitud};