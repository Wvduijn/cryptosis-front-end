const axios = require('axios')
export const sandbox = axios.create({
	baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.API_KEY,
	},
})

export const pro = axios.create({
	baseURL: 'https://pro-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.API_KEY,
	},
})

// #TODO: PASS THESE OPTIONS FROM FRONT_END
export const options = {
	params: {
		convert: 'EUR',
		limit: 100,
	},
}

export const metaoptions = {
	params: {
		symbol: 'BTC,ETH,DGB,KMD,VET',
	},
}

export const route = {
	coins: 'cryptocurrency/listings/latest',
	meta: 'cryptocurrency/info?id=1,2,10',
	market: 'global-metrics/quotes/latest',
}
