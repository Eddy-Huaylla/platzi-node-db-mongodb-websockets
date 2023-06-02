const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const MySchema = new Schema({
	chat : {
		type: Schema.ObjectId,
		ref: 'chats'
	},
	user: {
		type: Schema.ObjectId,
		ref : 'users'
	},
	message : {
		type: String,
		require : true
	},
	file : String,
	date : Date
});

const MessageModel = mongoose.model( 'message', MySchema );

module.exports = {
	MessageModel
}
