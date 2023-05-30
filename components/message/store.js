const db = require('mongoose');
const { MessageModel } = require('./model');

const uri = 'mongodb+srv://' + global.env.DB_USER + ':' + global.env.DB_PASSWORD  + '@cluster0.pggmzto.mongodb.net/?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

const list = async ( user = null ) => {
	const messages = await MessageModel.find(
		user !== null ? { 'user' : new RegExp( `^${ user }$`, 'i' ) } : {}
	);

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

const remove = async ( id ) => {
	// const message = await MessageModel.deleteOne( { '_id' : id } );
	const message = await MessageModel.findByIdAndDelete( id );

	return message;
}

module.exports = {
	add,
	list,
	update,
	remove
}
