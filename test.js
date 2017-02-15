var censys  = require('./censys.js');

var theSearch = censys.search('IPv4','http');
console.log(theSearch);