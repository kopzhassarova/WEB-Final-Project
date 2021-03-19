var fs = require('fs');
var words = fs.readFileSync('fav.json');
var data = JSON.parse(words);
console.log(data);
