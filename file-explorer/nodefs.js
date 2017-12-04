var fs = require ('fs'),
stdin = process.stdin,
stdout = process.stdout

function file(i) {
  var filename = files[i]
  fs.stat(_dirname + '/' + filename, function(err, stat){
    if(stat.isDirectory)
  });
}