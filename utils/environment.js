const fs = require('fs');

const initEnv = () => {
	try {
		const dotenv = fs.readFileSync('./.env');
		const envConfig = dotenv.toString();
		const envLines = envConfig.split('\n');

		global.env = {};
		envLines.forEach(( line ) => {
			if( line.trim() !== "" ) {
				const [ key, value ] = line.split('=');
				global.env[ key.trim() ] = value.trim();
			}
		});
	} catch( error ) {
		console.log( error );
	}
}

module.exports = {
	initEnv
}
