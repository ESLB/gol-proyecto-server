var mongoose = require('mongoose');

var Jugador = mongoose.model('Jugador', {
  nombre:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  edad: {
    type: Number,
    required: true,
    minlength: 1
  },
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  password:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  ubicacion:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  telephone:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  perfilImagen:{
    type: String,
    minlength: 1,
    trim: true,
	default: ""
  },
  teams:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  },
  retos:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  },
  solicitudes:{
    type: String,
    default: "",
    minlength: 1,
    trim: true
  } 
});

module.exports = {Jugador};
