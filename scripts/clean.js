var rimraf = require('rimraf');
var _path = require('path');
var dir = process.argv[2];

if (!dir) {
    return console.error('Please provide a folder name');
}

rimraf(_path.join(dir), function () { return console.log('Deleted!'); });
