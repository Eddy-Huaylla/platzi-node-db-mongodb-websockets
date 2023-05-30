const { MessageModel } = require('./model');

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
