const multer = require("multer");

const saveFile = ( path ) => {
	const storage = multer.diskStorage( {
		destination : ( req, file, cb )=> {
			cb( null, path );
		},
		filename : ( req, file, cb ) => {
			cb( null, Date.now() + '-' + file.originalname );
		}
	} );

	return multer( { storage: storage } );
}

module.exports = {
	saveFile
}
