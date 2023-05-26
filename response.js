exports.success = function ( req, res, data, status ) {
	res.status( status || 200 ).send( {
		'error' : '',
		'data' : data
	} );
};

exports.error = function ( req, res, error, status ) {
	res.status( status || 500 ).send(
		{
			'error' : error,
			'data' : ''
		}
	)
}
