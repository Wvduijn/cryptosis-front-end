// Node app which handles requests to endpoints
require('dotenv').config()
const express = require('express')
const axios = require('axios')

const app = express()

// Module for QueryStrings
// const querystring = require('querystring');
// axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));

// COINMARKETCAP EDNPOINTS:
// /cryptocurrency/listings/latest -- list all crypto's (latest)
// /cryptocurrency/info -- crypto metadata
// /cryptocurrency/quotes/latest -- crypto market quotes
// /cryptocurrency/quotes/historical -- crypto market quotes (historical)

// create Axios instance with default url + correct Header
const base = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
    timeout: 1000,
    headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY,
        'Content-Type:': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
        'Accept-encoding': 'deflate, gzip',
    },
})
// get coin data

// get metadata

// get watchlist - Future Feature

// get portfolio
app.listen(app.get('port'), function() {
    console.log('Find the server at http://localhost' + app.get('port'))
})
