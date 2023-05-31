const { UserModel } = require("./model")

const add = ( user ) => {
	const userModel = new UserModel( user );
	return userModel.save();
}

const update = async ( id, name ) => {
	const userModel = await UserModel.findById( id );
	userModel.name = name;

	return userModel.save()
}

const remove = async ( id ) => {
	return await UserModel.findByIdAndDelete( id );
}

const list = async () => {
	return await UserModel.find();
}

module.exports = {
	add,
	update,
	remove,
	list
}
