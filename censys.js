/*Build separate functions for each operation
check filetype of config file
Set place where one can add their configs/data i.e config file
check if function holds up for all kinds of search variations
check what other functions from the other apis do and what they return and get what they do

check how to add up data after each response before writing to file
*/

var config = require('./censys_config');
var request = require('request');
var apiUrl = 'https://www.censys.io/api/v1/';
var fs = require('fs');

module.exports = {
	search:function(index, searchTerm,pages){
		searchUrl = 'https://www.censys.io/api/v1/search'+index;
		request({
			url:searchUrl,
			method:'POST',
			qs:{
				"query":searchTerm,
				"pages":2,
				"fields":[]
			},
			auth:{
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

	view:function(index,id){
		//takes in index and the id depending on index provided
		viewUrl  = 'https://www.censys.io/api/v1/'+index+'/'+id;
		request.get(viewUrl,{
  		'auth':{
		    'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
		    'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response', function(response){
			//search function returns the response
			console.log(viewUrl);
			var information = JSON.stringify(response);
			fs.writeFileSync('data.txt',information);
		}).on('error', function(err){
			console.error(err);
		})	
	},
	data:function(){
		//do data function and develop it to list raw datasets available to download
		dataUrl = "https://www.censys.io/api/v1/data";
		request.get(dataUrl,{
			'auth':{
				'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
		    	'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response',function(response){
			console.log("Request went through");
			var chunk;
			response.on('data', function(data) {
				chunk += data;
			})
			fs.writeFile('data.txt',chunk,function(err){
					if(err) console.error(err);
					console.log('Finished writing to da file');
			})	
		}).on('error', function(err){
			console.error(err);
		})	
	},
	report:function(){
		//check how to get list of parameters from user and add them, maybe pass them into an array and assign them according to position in array
	}
}