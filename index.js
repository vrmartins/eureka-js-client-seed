const express = require('express')
const app = express()
const eurekaClient = require('./eureka')

app.get('/info', (req, res) => {
  res.json({message: `It's work`})
})

// Events
eurekaClient.on('started', () => console.log(`started in: ${Date().toString()}`))
eurekaClient.on('registered', () => console.log(`registered in: ${Date().toString()}`))
eurekaClient.on('deregistered', () => console.log(`deregistered in: ${Date().toString()}`))
eurekaClient.on('heartbeat', () => console.log(`heartbeat in: ${Date().toString()}`))
eurekaClient.on('registryUpdated', () => console.log(`registryUpdated in: ${Date().toString()}`))

// Comment to stop and uncomment to stop
eurekaClient.start((error) => {
  if (error) console.log('error', error)
})

// Uncomment to stop and comment to start
// eurekaClient.stop((error) => {
//   if (error) console.log('error', error)
// })

app.listen('3000', () => console.log(`Started server on 3000`))