const { add, update, remove, list } = require("./store");

const addUser = ( name ) => {
	try {
		if( !name || name.trim() === "" ) {
			return new Promise.reject( 'Datos invalidos.' );
		}

		name = name.trim();

		return add( {
			name: name
		});
	} catch ( error ) {
		return new Promise.reject( error );
	}
}

const updateUser = ( id, name ) => {
	try {
		if( !id || !name || id.trim() === "" || name.trim() === "" ) {
			return new Promise.reject( 'Datos inválidos. ' );
		}

		id = id.trim();
		name = name.trim();

		return update( id, name );
	} catch ( error ) {
		return new Promise.reject( error );
	}
}

const deleteUser = ( id ) => {
	return new Promise( async ( resolve, reject ) => {
		try {
			if( !id || id.trim() === "" ) {
				reject( 'El id es importante.' );
			}

			const result = await remove( id );

			if( result === null ) {
				reject( 'No existe el usuario.' );
			}

			resolve( result );
		} catch ( error ) {
			reject( error );
		}
	});
}

const listUser = () => {
	return new Promise( ( resolve, reject ) => {
		try {
			resolve( list() );
		} catch (error) {
			reject( error );
		}
	});
}

module.exports = {
	addUser,
	updateUser,
	deleteUser,
	listUser
}
