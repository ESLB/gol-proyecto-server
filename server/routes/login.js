const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Jugador = mongoose.model('jugadores');
var {ObjectID} = require('mongodb');
const _ = require('lodash');

router.post('/', (req, res)=> {

    var jugadorVacio = new Jugador({
        nombre: "Vacio",
        edad: "Vacio",
        email: "Vacio",
        password: "Vacio",
        ubicacion: "Vacio",
        telephone: "Vacio",
        perfilImagen: "Vacio"
    });

    var body = _.pick(req.body, ['email','telephone','password']);

    Jugador.findOne({email : body.email, password: body.password}).then((doc)=>{
        if(!doc)
        {
            res.send(jugadorVacio);
        }else {
            res.send(doc);
        }

    });

});

module.exports = router;
