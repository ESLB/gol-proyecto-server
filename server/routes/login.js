const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Jugador = mongoose.model('jugadores');
var {ObjectID} = require('mongodb');
const _ = require('lodash');

router.post('/', (req, res)=> {

    var body = _.pick(req.body, ['email','telephone','password']);

    res.send(body);
    //Jugador.findOne({email : body.email, password: body.password}))

});

module.exports = router;
