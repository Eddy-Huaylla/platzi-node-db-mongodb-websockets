const { ChatModel } = require("./model")

const add = ( chat ) => {
	const chats = new ChatModel( chat );
	return chats.save();
}

const list = async ( userId = null ) => {
	return await ChatModel.find(
		userId !== null ? { users : userId } : {}
	)
	.populate( 'users' )
	.exec()
	.then( chats => chats )
	.catch( error => {
		throw Error( error );
	});
}

module.exports = {
	add,
	list
}
