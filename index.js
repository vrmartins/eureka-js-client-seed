const express = require('express')
const app = express()
const eurekaClient = require('./eureka')

app.get('/info', (req, res) => {
  res.json({message: `It's work`})
})

eurekaClient.start((error) => console.log('error', error))
// eurekaClient.stop((error) => console.log('error', error))

app.listen('3000', () => console.log(`Started server on 3000`))