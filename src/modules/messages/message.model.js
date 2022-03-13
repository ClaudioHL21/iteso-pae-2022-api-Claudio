const Model = require('../../core/model');

class Message extends Model {
    constructor() {
        super('messages');
    }
 

    create(body){
        return new Promise((accept, reject) =>{
            let newMessage = {
                "channel": body.channel,
                "messageBody": body.messageBody,
                "date": Date.now()
            }
            console.log(newMessage);
            this.collection.insertOne(newMessage);
            accept(newMessage);
        });
    }
}

module.exports = Message;