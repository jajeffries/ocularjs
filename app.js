#! /usr/bin/env node

var args = process.argv.slice(2);

var currentDirectory = __dirname;

if (args.length === 0) {
  require('./app/main.js')(currentDirectory);
}

if (args[0] === 'init') {
  require('./init/init.js');
}