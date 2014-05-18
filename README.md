# ee-soa-discoverymanager

Manager for Service Discovery implementations

## installation

	npm install ee-soa-discoverymanager

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-discoverymanager.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-discoverymanager)


## usage


	var   DiscoveryManager 	= require('ee-soa-discoverymanager')
		, Discovery 		= require('ee-soa-discovery-sameprocess');
		, DiscoveryResponse = require('ee-soa-discovery-response');


	var manager = new DiscoveryManager();

	manager.use(new Discovery());


	manager.discover('AppID', 'ServiceID', function(err, response){
		if (response.status === DiscoveryResponse.statuses.Found) {
			// go ...
		}
	});

