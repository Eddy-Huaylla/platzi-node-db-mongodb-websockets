const fs = require('fs');

const createDirectoryNotExist = ( folderPath ) => {
	if (!fs.existsSync( folderPath )) {
		fs.mkdirSync( folderPath );
	}
}

module.exports = {
	createDirectoryNotExist
}
