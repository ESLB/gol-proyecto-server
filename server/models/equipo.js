var mongoose = require('mongoose');

var Equipo = mongoose.model('Equipo', {
  nombre:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  numero: {
    type: Number,
    required: true,
    minlength: 1
  },
  equipoImagen:{
    type: String,
    minlength: 1,
    trim: true,
	default: ""
  },
  completo:{
    type: Boolean,
    default: false
  },
  locacion:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  },
  administradores:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  },
  jugadores:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  }  
});

module.exports = {Equipo};
