/*Build separate functions for each operation
check filetype of config file
Set place where one can add their configs/data i.e config file
check if function holds up for all kinds of search variations
check what other functions from the other apis do and what they return and get what they do

check how to add up data after each response before writing to file
add config type to all functions
make search function work
make report function work
*/

var config = require('./censys_config');
var request = require('request');
var apiUrl = 'https://www.censys.io/api/v1/';
var fs = require('fs');

module.exports = {
	search:function(index,searchTerm,pages){
		var searchUrl = 'https://www.censys.io/api/v1/search'+index;
		request({
			url:searchUrl,
			method:'POST',
			qs:{
				"query":searchTerm,
				"pages":arguments[2],
				"fields":[]
			},
			auth:{
			    'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
			    'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response', function(response){
			//search function returns the response
			console.log("Request went through");
			var chunk = '';
			response.on('data', function(data) {
				chunk += data;
			})
			response.on('end', function(){
				fs.writeFile('data.txt',chunk,function(err){
					if(err) console.error(err);
					console.log('Finished writing to da file');
				})	
			})
		}).on('error', function(err){
			console.error(err);
		})	
	},

	view:function(index,id){
		//takes in index and the id depending on index provided
		var viewUrl  = 'https://www.censys.io/api/v1/'+index+'/'+id;
		request.get(viewUrl,{
  		'auth':{
		    'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
		    'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response', function(response){
			//search function returns the response
			console.log("Request went through");
			var chunk = '';
			response.on('data', function(data) {
				chunk += data;
			})
			response.on('end', function(){
				fs.writeFile('data.txt',chunk,function(err){
					if(err) console.error(err);
					console.log('Finished writing to da file');
				})	
		
			})
		}).on('error', function(err){
			console.error(err);
		})	
	},
	data:function(){
		//do data function and develop it to list raw datasets available to download
		var dataUrl = "https://www.censys.io/api/v1/data";
		request.get(dataUrl,{
			'auth':{
				'user':"'"+config.key+"'",
		    	'pass':"'"+config.secret+"'"
			}
		}).on('response',function(response){
			console.log("Request went through");
			var chunk = '';
			response.on('data', function(data) {
				chunk += data;
			})
			response.on('end', function(){
				fs.writeFile('data.txt',chunk,function(err){
					if(err) console.error(err);
					console.log('Finished writing to da file');
				})	
			})
		}).on('error', function(err){
			console.error(err);
		})	
	},
	report:function(index,query,field,buckets){
		//check how to get list of parameters from user and add them, maybe pass them into an array and assign them according to position in array
		var reportUrl = "https://www.censys.io/api/v1/report/"+index;
		request({
			url:reportUrl,
			method:'POST',
			qs:{
				"query":query,
				"field":field,
				"buckets":50
			},
			auth:{
			    'user':"92d6ccbf-ad24-4326-9ccc-43af301eebd4",
			    'pass':"8lr2dHV6T2AleMZwEs0ShHRXdGPXQbms"
			}
		}).on('response', function(response){
			//search function returns the response
			console.log(reportUrl);
			console.log("Request went through");
			var chunk = '';
			response.on('data', function(data) {
				chunk += data;
			})
			response.on('end', function(){
				fs.writeFile('data.txt',chunk,function(err){
					if(err) console.error(err);
					console.log('Finished writing to da file');
				})	
			})
		}).on('error', function(err){
			console.error(err);
		})	
	}
}