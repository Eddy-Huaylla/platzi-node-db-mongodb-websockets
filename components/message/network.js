const { Router } = require("express");

const response = require('../../network/response');
const { addMessage, getMessages, updateMessage, deleteMessage } = require("./controller");
const { createDirectoryNotExist } = require("../../utils/directory");
const { saveFile } = require("../../utils/files");
const { PATH_UPLOAD } = require("../../utils/const");

const router = Router();

createDirectoryNotExist( PATH_UPLOAD )

const upload = saveFile( PATH_UPLOAD + '/' );

router.get( '/', ( req, res) => {
	getMessages( req.query.user || null )
	.then( list => {
		response.success( req, res, list );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.post( '/', upload.single('file'), ( req, res ) => {
	addMessage( req.body.chat, req.body.user, req.body.message, req.file )
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