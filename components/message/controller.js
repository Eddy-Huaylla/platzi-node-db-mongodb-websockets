const { add, list, update } = require("./store");

const getMessages = () => {
	return new Promise( (resolve, reject) => {
		try {
			resolve( list() );
		} catch( error ) {
			reject( error );
		}
	});
}

const addMessage = ( user, message ) => {
	return new Promise( (resolve, reject) => {
		try {
			user = user.trim()
			message = message.trim()

			if( !user || !message || user === "" || message === "" ) {
				reject('Los datos son incorrectos');
			}

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
			id = id.trim();
			text = text.trim();

			if( !id || !text || id === "" || text === "" ) {
				reject( 'Los datos son incorrectos' );
			}

			const result = await update( id, text );

			resolve( result );
		} catch ( error ) {
			reject( error );
		}
	} );
}

module.exports = {
	addMessage,
	getMessages,
	updateMessage
}