const { model, Schema } = require("mongoose");

const chatSchema = new Schema( {
	users: [
		{
			type: Schema.ObjectId,
			ref: 'users'
		}
	]
} );

const ChatModel = model( 'chats', chatSchema );

module.exports = {
	ChatModel
}
