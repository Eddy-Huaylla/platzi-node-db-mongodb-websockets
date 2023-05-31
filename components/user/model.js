const { Schema, model } = require("mongoose");

const MySchema = new Schema( {
	name : String
} );

const UserModel = model( 'users', MySchema );

module.exports = {
	UserModel
}
