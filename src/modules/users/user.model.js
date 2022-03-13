const Model = require('../../core/model');
const tokenKey = process.env.tokenKey;
const jwt = require('jsonwebtoken');
const db = require('../../core/database');
const {ObjectId} = require('mongodb');


class User extends Model {
    constructor() {
        super('user');
    }

 
    create(body){
        return new Promise ((accept, reject) => {
           
            this.collection.findOne({email: body.email}, (err, result) => {
                console.log(result);
                if(!result){
                    let newUser = {
                        "name": body.name,
                        "email": body.email,
                        "password" : body.password,
                        "role": body.role
                    }
                    this.collection.insertOne(newUser);
                    console.log(newUser);
                     accept(newUser);
                }
                else{
                    reject();
                }
            });
        }); 
    }

    login(body){
        return new Promise((accept, reject) =>{
            this.collection.findOne({email: body.email}, (err, result) =>{
                if(result){
                    if(result.password == body.password){
                        let validation = {
                        _id: result._id
                        }
                        let options = {
                        expiresIn: 24*60*60
                        }
                        accept(jwt.sign(validation, tokenKey, options));
                    }
                }
                reject();
            });
        });
    }

    linkInvite(body){
        return new Promise((accept, reject) =>{
                db.collection('channel').findOne({_id: ObjectId(body.idChannel)}, (err, result) => {
                    if(result.creatorEmail == body.email){
                        let validation = {
                            _id: result._id
                        }
                        let options = {
                            expiresIn: 24*60*60
                        }
                        let tokenGenerator = jwt.sign(validation, tokenKey, options);
                        let link = 'http://localhost:3001/api/channels/invite/' + tokenGenerator;
                        accept(link);
                    }
                    else{
                        reject("No tiene permisos para invitar a este canal");
                    }
                });
            });

    }

   
}



module.exports = User;