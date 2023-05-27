const LIST = [];

const add = ( message ) => {
	LIST.push( message );
}

const list = () => {
	return LIST;
}

module.exports = {
	add,
	list
}
