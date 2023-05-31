const { Router } = require("express");
const { addUser, updateUser, deleteUser, listUser } = require("./controller");

const response = require('../../network/response');

const router = Router();

router.post( '/', ( req, res) => {
	addUser( req.body.name )
	.then( user => {
		response.success( req, res, `Usuario creado con el id: ${ user.id }.`, 201 );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.patch( '/:id', ( req, res ) => {
	updateUser( req.params.id, req.body.name )
	.then( user => {
		response.success( req, res, `Usuario ${ user.name } actualizado correctamente.`);
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.delete( '/', ( req, res ) => {
	deleteUser( req.query.id )
	.then( user => {
		response.success( req, res, `Usuario ${ user.name } se ha eliminado.` );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

router.get( '/', (req, res) => {
	listUser()
	.then( users => {
		response.success( req, res, users );
	})
	.catch( error => {
		response.error( req, res, error );
	});
});

module.exports = {
	userNetwork : router
}
