// import Eureka from 'eureka-js-client';
 
// Or, if you're not using a transpiler:
const Eureka = require('eureka-js-client').Eureka;
 
// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: 'eurekaClientTest',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/info',
    port: {
      '$': 3000,
      '@enabled': 'true'
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: '127.0.0.1',
    port: 8761,
    servicePath: '/eureka/apps/'
  },
});

// client.logger.level('debug');

module.exports = client