var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Jugador} = require('./models/jugador');
var {Equipo} = require('./models/equipo');
var {Solicitud} = require('./models/solicitud');
var {Reto} = require('./models/reto');

const todos = require('./routes/todos');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/todos', todos);

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
