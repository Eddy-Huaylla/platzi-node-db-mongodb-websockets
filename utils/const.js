const DB_URI = 'mongodb+srv://' + global.env.DB_USER + ':' + global.env.DB_PASSWORD  + '@cluster0.pggmzto.mongodb.net/' + global.env.DB_COLLECTION +'?retryWrites=true&w=majority';
const PATH_UPLOAD = 'public/uploads';

module.exports = {
	DB_URI,
	PATH_UPLOAD
}
