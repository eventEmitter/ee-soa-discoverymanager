
	
	var   Class 			= require('ee-class')
		, log 				= require('ee-log')
		, assert 			= require('assert')
		, SameProcess 		= require('ee-soa-discovery-sameprocess')
		, DiscoveryResponse = require('ee-soa-discovery-response');



	var   Manager = require('../')
		, manager;



	describe('The Discovery Manager', function(){
		it('should not throw when instantiated', function(){
			manager = new Manager();
		});

		it('should be able to accept a discovery implementation', function(){
			manager.use(new SameProcess());
		});

		it('should be able to discover a service', function(done){
			manager.discover('app', 'service', function(err, response){
				if (err) done(err);
				else {
					assert.equal(response.status, DiscoveryResponse.statuses.Found);
					assert.equal(response.transport, DiscoveryResponse.transports.Local);
					done();
				}
			});
		});
	});
	