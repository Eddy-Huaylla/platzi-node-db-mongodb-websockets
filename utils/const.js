const DB_URI = 'mongodb+srv://' + global.env.DB_USER + ':' + global.env.DB_PASSWORD  + '@cluster0.pggmzto.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
	DB_URI
}
