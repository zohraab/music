const userModel = require("../data/models/user");
const mongoose = require ('mongoose');
const data = require("../data/data")
const User = require ("../data/models/user");

module.exports={
    createUser(req, res){
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            mdp: req.body.mdp,
        })
        newUser.save()
        res.end();
    },
    readUser(req, res){
        const listUser = new User.find()
        res.json(listUser)
    }
}