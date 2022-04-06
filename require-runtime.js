const fs = require('fs')
const path = require('path')

function requireRuntime (modulePath) {
    const fileContent = fs.readFileSync(modulePath).toString('utf-8')

    let moduleContent = `let module={exports:{},filename:${JSON.stringify(modulePath)},path:${JSON.stringify(path.dirname(modulePath))}};${fileContent};module.exports;`

    const moduleExecution = eval(moduleContent)

    return moduleExecution
}

module.exports = requireRuntime