const User = require("./user.model");

const UsersController = {
    getAll: (req, res) => {
        const user = new User();
        user.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const user = new User();
        user.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },

   
    create: (req, res) => {
        const user = new User();
        user.create(req.body).then(result => {
            if(result){
                res.send(result);
            } 
        }).catch(err => {res.send("Ese correo ya tiene cuenta")});
    },

    login: (req, res) => {
        const user = new User();
        user.login(req.body).then(result => {
            if(result){
                res.sendStatus(200);
            } 
        }).catch(err => {res.send("Contraseña o correo incorrecto")});
    },

    linkInvite: (req, res) => {
        const user = new User();
        user.linkInvite(req.body).then(result => {
            if(result){
                res.send(result);
            }
        }).catch(err =>{res.send(err)});
    }


}

module.exports = UsersController;