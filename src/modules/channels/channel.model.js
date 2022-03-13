const { accepts } = require('express/lib/request');
const Model = require('../../core/model');
const tokenKey = process.env.tokenKey;
const jwt = require('jsonwebtoken');
const db = require('../../core/database');
const {ObjectId} = require('mongodb');

class Channel extends Model {
    constructor() {
        super('channel');
    }


    create(body){
        return new Promise((accept, reject) =>{
            let newChannel = {
                "title": body.title,
                "description": body.description,
                "creatorEmail": body.creatorEmail,
                "users": [] 
            }
            this.collection.insertOne(newChannel);
            console.log("llego")
            accept(newChannel);
        });
    }

    register(link, body){
        return new Promise((accept, reject) =>{
            jwt.verify(link, tokenKey, (err, objeto) => {
                if(err){
                    reject("No existe ese canal o el link es incorrecto");
                }
                accept(this.collection.updateOne({_id: ObjectId(objeto._id)}, {$push: {users: body.email}}));
            });
            
        })
    }
}

module.exports = Channel;