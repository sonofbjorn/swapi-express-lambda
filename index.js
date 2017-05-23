'use strict'
const express = require('express')
const request = require('request')

const app = express()
const baseSwapiUrl = 'http://swapi.co/api/'


app.get('/person', (req, res) => {
    const randomId = Math.floor(Math.random() * 87)
    request(`${baseSwapiUrl}people/${randomId}`)
        .pipe(res)
})

module.exports = app