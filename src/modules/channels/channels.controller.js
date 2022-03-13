const Channel = require("./channel.model");

const ChannelsController = {
    getAll: (req, res) => {
        const channel = new Channel();
        channel.getAll().then(results => {
            res.send(results);
        });
    },
    getOne: (req, res) => {
        const channel = new Channel();
        channel.getOne(req.params.id).then(result => {
            if(result) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        const channel = new Channel();
        channel.create(req.body).then(result =>{
            if(result){
                res.send(result);
            }
        });
    },

    register: (req, res) => {
        const channel = new Channel();
        channel.register(req.params.id, req.body).then(result =>{
            if(result){
                res.send(result);
            }
        });
    }
}

module.exports = ChannelsController;