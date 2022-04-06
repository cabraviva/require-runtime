# require-runtime
 Use require() at runtime (useful when using pkg)

# Usage
```js
const requireRuntime = require('require-runtime')

// Now you can use requireRuntime() instead of
// require() to simply require modules at runtime

requireRuntime('my-module.js')
```

# Example
example/index.js
```js
const requireRuntime = require('require-runtime')

const myFunc = requireRuntime('example-module.js')

myFunc('a', 'b', 'c')
```

example/example-module.js
```js
console.log('Hi!')

const myFunc = (a, b, c) => {
    console.log(a, b, c)
}

module.exports = myFunc
```