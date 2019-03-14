import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		coins: [],
		metadata: [],
		watchlist: [],
		portfolio: [],
		totalMarketCap: 0,
		total24HrVolume: 0,
		totalBTCDominance: 0,
		loading: false,
	},
	mutations: {
		// SET LOADING
		SET_LOADING(state, payload) {
			state.loading = payload
		},
		// SET COIN DATA
		UPDATE_COINS(state, payload) {
			const { data } = payload
			const coinsArray = Object.keys(data).map(key => {
				return data[key]
			})
			state.coins = coinsArray.sort((a, b) => a.rank - b.rank)
		},
	},
	actions: {
		// GET COIN DATA
		async getCoins({ commit }) {
			try {
				commit('SET_LOADING', true)
				const coins = await axios.get('/api/coins')

				commit('UPDATE_COINS', coins.data)
				commit('SET_LOADING', false)
			} catch (error) {
				console.log(error) // catches both errors
			}
		},
		// GET COIN META DATA - ONLY NEEDED ONCE
	},
	getters: {
		loading: state => state.loading,
		coins: state => state.coins,
	},
})
