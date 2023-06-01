const { add, list, update, remove } = require("./store");

const getMessages = ( user ) => {
	return new Promise( (resolve, reject) => {
		try {
			if( user && user.trim() !== "" ) {
				user = user.trim();
			}

			resolve( list( user ) );
		} catch( error ) {
			reject( error );
		}
	});
}

const addMessage = ( user, message ) => {
	return new Promise( (resolve, reject) => {
		try {
			if( !user || !message || user.trim() === "" || message.trim() === "" ) {
				reject('Los datos son incorrectos');
			}

			user = user.trim();
			message = message.trim();

			const full_message = {
				user : user,
				message: message,
				date : new Date()
			}

			add( full_message );

			resolve( full_message );
		} catch ( error ) {
			reject( error );
		}
	});
}

const updateMessage = ( id, text ) => {
	return new Promise( async ( resolve, reject ) => {
		try {
			if( !id || !text || id.trim() === "" || text.trim() === "" ) {
				reject( 'Los datos son incorrectos' );
			}

			id = id.trim();
			text = text.trim();

			const result = await update( id, text );

			resolve( result );
		} catch ( error ) {
			reject( error );
		}
	} );
}

const deleteMessage = ( id ) => {
	return new Promise( async ( resolve, reject ) => {
		try {
			if( !id || id.trim() === "" ) {
				reject( 'El id es importante.' );
			}

			id = id.trim();

			const message = await remove( id );

			if( message === null ) {
				reject( 'El mensaje no existe.' );
			}

			resolve( message );
		} catch( error ) {
			console.error( error );
			reject( error );
		}
	} );
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage
}