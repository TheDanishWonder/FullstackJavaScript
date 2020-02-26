var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3]

function getDir(callback) {

    fs.readdir(folder, function doneReading(err, fileContents) {
        fileContents.forEach(function(file){
            if (path.extname(file) === ext) {
                console.log(file)
                
            }
        });
        callback()
    })
  }

  function filesFromDir() {
    console.log(file)

  }

getDir(filesFromDir)