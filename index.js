var template = require('underscore').template;
var multiline = require('multiline');

module.exports = function(fn) {
	return template(multiline(fn).trim());
}

