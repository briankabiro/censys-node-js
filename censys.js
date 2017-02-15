/*Build separate functions for each operation
check filetype of config file
Set place where one can add their configs/data i.e config file
check if function holds up for all kinds of search variations
check what other functions from the other apis do and what they return and get what they do
*/

var config = require('./censys_config');
var request = require('request');

module.exports = {
	search:function(index, searchTerm){
		 searchUrl = "https://www.censys.io/api/v1/search/"+index+"/"+searchTerm;
		request.get(searchUrl,{
  		'auth':{
		    'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
		    'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response', function(response){
			//search function returns the response
			console.log(response);
			return response;
		}).on('error', function(err){
			console.error(err);
		})	
	},
	view:function(){
		//takes in index and the id depending on index provided
	},
	data:function(data){
		//do data function and develop it to list raw datasets available to download
		dataUrl = "https://www.censys.io/api/v1/"+data;
		request.get(dataUrl),{
			'auth':{
				'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
		    	'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}.on('response',function(response){
			console.log(response);
		}).on('error', function(err){
			console.error(err);
		})	
	},
	report:function(){
		//check how to get list of parameters from user and add them, maybe pass them into an array and assign them according to position in array
	}
}