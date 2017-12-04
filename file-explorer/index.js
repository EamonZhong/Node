// var fs = require('fs');
// console.log(require('fs').readdirSync(__dirname)); 
function async (err, files) {console.log(files);}
require('fs').readdir('.' , async);
// fs.readdir(__dirname, function(err, files){
//   console.log(files);
// });