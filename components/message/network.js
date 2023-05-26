const { Router } = require("express");

const response = require('../../network/response');
const { addMessage } = require("./controller");

const router = Router();

router.get( '/', ( req, res) => {
	res.header(
		{
			'custom-header' : "Nuestro valor personalizado"
		}
	);

	response.success( req, res, 'lista de mensajes');
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

module.exports = router;