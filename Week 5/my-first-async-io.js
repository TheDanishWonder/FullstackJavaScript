var fs = require('fs')
var fileLenght = undefined
function addOne(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        fileLenght = fileContents.toString().split('\n').length-1

        callback()
    })
  }

  function countMyFile() {
    console.log(fileLenght)
  }

addOne(countMyFile)