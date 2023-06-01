const mongoose = require( 'mongoose' );

const Schema = mongoose.Schema;

const MySchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref : 'users'
	},
	message : {
		type: String,
		require : true
	},
	date : Date
});

const MessageModel = mongoose.model( 'message', MySchema );

module.exports = {
	MessageModel
}
