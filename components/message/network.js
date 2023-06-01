const { Router } = require("express");
const fs = require('fs');
const multer = require("multer");

const response = require('../../network/response');
const { addMessage, getMessages, updateMessage, deleteMessage } = require("./controller");

const router = Router();

const createUploadsFolder = () => {
	const folderPath = 'uploads';

	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}
};

createUploadsFolder();

const storage = multer.diskStorage({
	destination: ( req, file, cb ) => {
		cb(null, 'uploads/');
	},
	filename: ( req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

const upload = multer( { storage: storage } );

router.get( '/', upload.single('file'), ( req, res) => {
	getMessages( req.query.user || null )
	.then( list => {
		response.success( req, res, list );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.post( '/', ( req, res ) => {
	addMessage( req.body.chat, req.body.user, req.body.message )
	.then( full_message => {
		response.success( req, res, 'Creado correctamente el mensaje: ' + full_message.message, 201 );
	})
	.catch( error => {
		console.log( error );
		response.error( req, res, error, 500);
	});
});

router.patch( '/:id', ( req, res ) => {
	updateMessage( req.params.id, req.body.message )
	.then( message => {
		response.success( req, res, "Mensaje actualizado correctamente del usuario: " + message.user.name );
	})
	.catch( error => {
		console.log( error );
		response.error( req, res, error, 500);
	});
});

router.delete('/:id', ( req, res ) => {
	deleteMessage( req.params.id )
	.then( message => {
		console.log( message );
		response.success( req, res, `Mensaje eliminado con el id: ${ message.id } del usuario ${ message.user.name }.` );
	})
	.catch( error => {
		console.log( error );
		response.error( req, res, error, 500);
	})
}),

module.exports = router;