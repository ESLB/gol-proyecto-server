const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Equipo = mongoose.model('equipos');
var {ObjectID} = require('mongodb');
const _ = require('lodash');

router.get('/', (req, res) =>{
    Equipo.find().then((equipos)=>{
        res.send(equipos);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Equipo.findById(id).then((equipo)=>{
        if(!equipo){
            return res.status(404).send();
        }
        res.send(equipo);
    }).catch((e)=>{
        res.status(400).send()
    });
});

router.post('/', (req, res)=> {
    var equipo = new Equipo({
        nombre: req.body.nombre,
        numero: req.body.numero
    });

    equipo.save().then((doc)=>{

        var id = _.pick(doc, ['_id']);

        Equipo.findById(id).then((equipo) => {
          res.send(equipo);
        });

        //res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.patch('/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['nombre', 'numero']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Equipo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((equipo) => {
        if(!equipo) {
            return res.status(404).send();
        }

        Equipo.findById(id).then((equipo) => {
          res.send(equipo);
        });
        //res.send(equipo);
    }).catch((e) => {
        res.status(400).send();
    })
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Equipo.findByIdAndRemove(id).then((equipo)=> {
        if(!equipo) {
            return res.status(404).send();
        }

        res.send(equipo);
    }).catch((e) => {
        res.status(400).send();
    });
});

module.exports = router;
