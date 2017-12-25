var express = require('express');
var bodyParser = require('body-parser');
//BASE DE DATOS
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Jugador} = require('./models/jugador');
var {Equipo} = require('./models/equipo');
var {Solicitud} = require('./models/solicitud');
var {Reto} = require('./models/reto');

//CARGAR RUTAS
const todos = require('./routes/todos');
const jugadores = require('./routes/jugadores');


var app = express();
app.use(bodyParser.json());

//RUTAS CONFIGURAR
app.use('/todos', todos);
app.use('/jugadores', jugadores);

//SERVIDOR 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
