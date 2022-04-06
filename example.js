const requireRuntime = require('./require-runtime')

const myFunc = requireRuntime('example-module.js')

myFunc('a', 'b', 'c')