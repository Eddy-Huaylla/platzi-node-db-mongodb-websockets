const { Router } = require("express");

const response = require('../../network/response');
const { addMessage, getMessages, updateMessage } = require("./controller");

const router = Router();

router.get( '/', ( req, res) => {
	getMessages( req.query.user || null )
	.then( list => {
		response.success( req, res, list );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.post( '/', (req, res) => {
	addMessage( req.body.user, req.body.message )
	.then( full_message => {
		response.success( req, res, 'Creado correctamente el usuario ' + full_message.user, 201 );
	})
	.catch( error => {
		console.log( error );
		response.error( req, res, error, 500);
	});
});

router.patch( '/:id', ( req, res ) => {
	updateMessage( req.params.id, req.body.message )
	.then( message => {
		response.success( req, res, "Mensaje actualizado correctamente del usuario: " + message.user );
	})
	.catch( error => {
		console.log( error );
		response.error( req, res, error, 500);
	});
})

module.exports = router;