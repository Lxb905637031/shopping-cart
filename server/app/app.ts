import express, { Application } from 'express'

import { PHONES } from './data/phone'

const app: Application = express()

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELECT,OPTIONS')
    next()
})

app.get('/phones', (req, res, next) => {
    res.send(PHONES)
    next()
})

app.listen('8080', () => {
    console.log('Listening on port 8080')
})
