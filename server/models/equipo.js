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
	default: "http://www.nextcorporate.com/wp-content/uploads/2015/10/icono-equipo.png"
  },
  completo:{
    type: Boolean,
    default: false
  },
  locacion:{
    type: String,
    default: "La Victoria",
    trim: true
  },
  administradores:{
    type: String,
    default: "",
    trim: true
  },
  jugadores:{
    type: String,
    default: "",
    trim: true
  }  
});

module.exports = {Equipo};
