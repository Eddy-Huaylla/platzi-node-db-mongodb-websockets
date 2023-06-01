
const { chatNetwork } = require('../components/chat/network');
const message = require('../components/message/network');
const { userNetwork } = require('../components/user/network');

const routes = ( server ) => {
	server.use( '/message', message );
	server.use( '/user', userNetwork );
	server.use( '/chat', chatNetwork )
}

module.exports = routes;
