!function(){

	var   Class 				= require('ee-class')
		, log 					= require('ee-log')
		, DiscoveryResponse 	= require('ee-soa-discovery-response');



	module.exports = new Class({

		init: function(options) {
			Class.define(this, '_discovery', Class([]));
		}


		, use: function(manager) {
			this._discovery.push(manager);
		}


		, discover: function(application, service, callback) {
			this._discover(application, service, callback, 0);
		}


		, _discover: function(application, service, callback, index) {			
			if (this._discovery.length > index) {
				this._discovery[index].discover(application, service, function(err, response){
					if (err || !response || !response.isPositive()) this._discover(application, service, callback, ++index);
					else callback(null, response); 
				}.bind(this));
			}
			else {
				callback(null, new DiscoveryResponse({
					status: DiscoveryResponse.NotFound
				}));
			}
		}
	});
}();
