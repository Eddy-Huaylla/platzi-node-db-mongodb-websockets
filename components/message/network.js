const { Router } = require("express");

const response = require('../../network/response');

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
	if( req.query.error === 'ok') {
		response.error( req, res, 'Error inesperado', 500);
	} else {
		response.success( req, res, 'Creado correctamente', 201 );
	}
});

module.exports = router;