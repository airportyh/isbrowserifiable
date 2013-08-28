var exec = require('child_process').exec


var package = process.argv[2]

var p = exec('npm install ' + package)

p.stdout.pipe(process.stdout)
p.stderr.pipe(process.stderr)

p.on('exit', function(){
  console.log('bfy now starts verifying')

})