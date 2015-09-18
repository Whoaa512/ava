'use strict';
var resolveFrom = require('resolve-from');
var path = process.argv[2];

var hasGenerators = parseInt(process.version.slice(1), 10) > 0;

var options = {
	blacklist: hasGenerators ? ['regenerator'] : [],
	optional: hasGenerators ? ['asyncToGenerator'] : [],
	only: path
};

try {
	var localBabel = resolveFrom('.', 'babel-core/register') || resolveFrom('.', 'babel/register');

	require(localBabel)(options);
} catch (err) {
	require('babel-core/register')(options);
}

require(path);
