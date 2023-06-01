const { MessageModel } = require('./model');

/* const list = ( user = null ) => {
	return new Promise( ( resolve, reject ) => {
		MessageModel.find(
			user !== null ? { 'user' : new RegExp( `^${ user }$`, 'i' ) } : {}
		)
		.populate( 'user' )
		.exec()
		.then( message => {
			resolve( message );
		})
		.catch( error => {
			reject( error );
		});
	});
} */


const list = async ( user = null ) => {
	return await MessageModel.find(
		user !== null ? { 'user' : new RegExp( `^${ user }$`, 'i' ) } : {}
	)
	.populate( 'user' )
	.exec()
	.then( message => message )
	.catch( error => {
		throw new Error( error );
	});
}

const add = ( message ) => {
	const myMessage = new MessageModel( message );
	myMessage.save();
}

const update = async ( id, text ) => {
	//const message = await MessageModel.findById( id );
	const message = await MessageModel.findOne( { '_id' : id } )
								.populate( 'user')
								.exec()
								.then( message => message )
								.catch( error => {
									throw new Error( error );
								});

	message.message = text;

	return message.save();
}

const remove = async ( id ) => {
	// const message = await MessageModel.deleteOne( { '_id' : id } );
	const message = await MessageModel.findByIdAndDelete( id ).populate( 'user' )
															.exec()
															.then( message => message )
															.catch( error => {
																throw Error( error );
															});

	return message;
}

module.exports = {
	add,
	list,
	update,
	remove
}
