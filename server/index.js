const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'e370c411fa85493b90370984ee8d8385',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
//     rollbar.log('Someone requested the home page of the website')
// })

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../index.html'))
        somethingNonExistend()
    } catch (err) {
        console.log(err)
        rollbar.error(`${err} triggered because get request tries to get somethingNonExistent`)
    }
})

const PORT = process.env.PORT || 4005

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})