const db = require('mongoose');
const { MessageModel } = require('./model');

const uri = 'mongodb+srv://' + global.env.DB_USER + ':' + global.env.DB_PASSWORD  + '@cluster0.pggmzto.mongodb.net/?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

const list = async () => {
	const messages = await MessageModel.find();

	return messages;
}

const add = ( message ) => {
	const myMessage = new MessageModel( message );
	myMessage.save();
}

const update = async ( id, text ) => {
	//const message = await MessageModel.findById( id );
	const message = await MessageModel.findOne( { '_id' : id } );
	message.message = text;

	return message.save();
}

module.exports = {
	add,
	list,
	update
}
