// lib/app.ts
import express = require('express');
import nunjucks = require('nunjucks');
import Routes from './routes/index'
import * as bodyParser from 'body-parser'

const app: express.Application = express()

nunjucks.configure('src/main/views', {
    autoescape: true,
    express: app,
    noCache: true
})

app.set('view engine', 'njk')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

app.use('/', (req, res, next) => {
    //TODO in progress form middleware
    next()
})

app.use('/', Routes)


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


