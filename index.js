var template = require('underscore').template;
var multiline = reequire('multiline');

module.exports = function(fn) {
	return _.template(multiline(fn).trim());
}

