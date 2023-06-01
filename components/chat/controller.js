const { add, list } = require("./store");

const addChats = ( idUsers ) => {
	return new Promise( ( resolve, reject ) => {
		try {
			if( !idUsers || !Array.isArray( idUsers ) || idUsers.length === 0 ) {
				reject( 'Usuarion necesario.' );
			}

			const chat = {
				users: idUsers
			};

			resolve( add( chat ) );
		} catch ( error ) {
			reject( error );
		}
	});
}

const getChats = ( idUser ) => {
	return new Promise( ( resolve, reject ) => {
		try {
			if( !idUser || idUser.trim() === "" ) {
				reject( 'Id usuario necesario' );
			}

			resolve( list( idUser ) );
		} catch (error) {
			reject( reject );
		}
	});
}

module.exports = {
	addChats,
	getChats
}
