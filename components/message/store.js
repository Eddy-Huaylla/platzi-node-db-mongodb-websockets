const db = require('mongoose');
const { MessageModel } = require('./model');

const uri = 'mongodb+srv://' + global.env.DB_USER + ':' + global.env.DB_PASSWORD  + '@cluster0.pggmzto.mongodb.net/?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

const add = ( message ) => {
	const myMessage = new MessageModel(message);
	myMessage.save();
}

const list = async () => {
	const messages = await MessageModel.find();

	return messages;
}

module.exports = {
	add,
	list
}
