const addMessage = ( user, message ) => {
	return new Promise( (resolve, reject) => {

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
		console.log( full_message );

		resolve( full_message );
	})
}

module.exports = {
	addMessage
}