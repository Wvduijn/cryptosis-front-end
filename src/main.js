import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'
import './assets/scss/main.scss'

Vue.use(Buefy, {
	defaultIconPack: 'fas',
	defaultContainerElement: '#content',
	// ...
})

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
}).$mount('#app')
