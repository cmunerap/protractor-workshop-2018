var rimraf = require('rimraf');
var _path = require('path');
var args = [...process.argv];
args.splice(0, 2);
var directories = args;

if (!directories.length) {
    return console.error('Please provide folders to be deleted');
}

directories.forEach(dir => {
    rimraf(_path.join(dir), () => { return console.log(`${dir} deleted!`); });
});
