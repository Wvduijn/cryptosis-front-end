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
    mutations: {},
    actions: {},
    getters: {},
})
