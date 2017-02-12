/*Build separate functions for each operation
check filetype of config file
Set place where one can add their configs/data i.e config file
check if function holds up for all kinds of search variations
check what other functions from the other apis do and what they return and get what they do
*/

var config = require('./config');
var request = require('./request');

module.exports = {
	search:function(index, searchTerm){
		var url = "https://www.censys.io/api/v1/search/"+index+"/"+searchTerm;
		request.get(url,{
  		'auth':{
		    'user':config.api_key,
		    'pass':config.api_secret
			}
		}).on('response', function(response){
			//search function returns the response
			return response;
		}).on('error', function(err){
			console.error(err);
		})	
	}
}