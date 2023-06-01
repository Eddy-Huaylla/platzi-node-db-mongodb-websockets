const { Router } = require("express");
const { addChats, getChats } = require("./controller");

const response = require( "../../network/response" );

const router = Router();

router.post( '/', ( req, res ) => {
	addChats( req.body.users )
	.then( chat => {
		response.success( req, res, `Chat registrado correctamente: ${ chat.id }.`, 201 );
	})
	.catch( error => {
		response.error( req, res, error );
	})
});

router.get( '/:idUser', ( req, res ) => {
	getChats( req.params.idUser )
	.then( chats => {
		response.success( req, res, chats );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

module.exports = {
	chatNetwork : router
}
