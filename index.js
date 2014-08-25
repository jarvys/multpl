var template = require('underscore').template;
var multiline = require('multiline');

module.exports = function(fn) {
	return _.template(multiline(fn).trim());
}

