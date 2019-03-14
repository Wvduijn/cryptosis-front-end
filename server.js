// Node app which handles requests to endpoints
// import * as constants from './server-const';
require('dotenv').config()
const express = require('express')
const axios = require('axios')

const app = express()

app.set('port', process.env.PORT || 3000)

// Module for QueryStrings
// const querystring = require('querystring');
// axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));

// COINMARKETCAP EDNPOINTS:
// /cryptocurrency/listings/latest -- list all crypto's (latest)
// /cryptocurrency/info -- crypto metadata
// /cryptocurrency/quotes/latest -- crypto market quotes
// /cryptocurrency/quotes/historical -- crypto market quotes (historical)

// create Axios instance with default url + correct Header
// test url: sandbox-api.coinmarketcap.com
// url: https://pro-api.coinmarketcap.com/v1/

const sandbox = axios.create({
	baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.API_KEY,
	},
})

const pro = axios.create({
	baseURL: 'https://pro-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.API_KEY,
	},
})

// #TODO: PASS THESE OPTIONS FROM FRONT_END
const options = {
	params: {
		convert: 'EUR',
		limit: 100,
	},
}

const metaoptions = {
	params: {
		symbol: 'BTC,ETH,DGB,KMD,VET',
	},
}

const route = {
	coins: 'cryptocurrency/listings/latest',
	meta: 'cryptocurrency/info?id=1,2,10',
	market: 'global-metrics/quotes/latest',
}
// get coin data - #TODO move query params to front-end -- ?convert=EUR,BTC&limit=100'
app.get('/api/coins', function(req, res) {
	sandbox
		.get('/cryptocurrency/listings/latest', options)
		.then(function(response) {
			res.setHeader('Cache-Control', 'no-cache')
			res.json(response.data)
		})
		.catch(function(error) {
			console.log('api call failed :(', error)
		})
})
// get metadata - map to graphql backend
app.get('/api/coin-info', function(req, res) {
	sandbox
		.get('cryptocurrency/info', metaoptions)
		.then(function(response) {
			res.setHeader('Cache-Control', 'no-cache')
			res.json(response.data)
		})
		.catch(function(error) {
			console.log('api call failed :(', error)
		})
})
// get MarketData for Ticker
app.get('/api/marketdata', function(req, res) {
	sandbox
		.get(`${route.market}`)
		.then(function(response) {
			res.setHeader('Cache-Control', 'no-cache')
			res.json(response.data)
		})
		.catch(function(error) {
			console.log('api call failed :(', error)
		})
})

// get watchlist - Future Feature - map to graphql backend

// get portfolio
app.listen(app.get('port'), function() {
	console.log('Find the server at http://localhost' + app.get('port'))
})
