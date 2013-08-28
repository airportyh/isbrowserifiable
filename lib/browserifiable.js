var exec = require('child_process').exec
var path = require('path')

var binpath = path.join(__dirname, '../node_modules/browserify/bin/cmd.js')
var module = process.argv[2]
var p = exec(binpath + ' ' + path.join('node_modules', module))
p.on('exit', function(code){
  console.log('Exit code', code)
  if (code === null || code === 0){
    console.log('Browserify worked for ' + module + '!')
  }else{
    console.log('Browserify failed for ' + module + '.')
  }
})