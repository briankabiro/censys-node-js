var censys  = require('./censys.js');

//var theSearch = censys.search('IPv4','heartbleed');
//censys.view('websites','github.com');
//censys.data();
censys.report("ipv4","80.http.get.headers.server: Apache",'location.country_code:"KE"');