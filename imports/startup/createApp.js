import Vue from 'vue'

import vuetify from './plugins/vuetify'

import App from '../ui/App.vue'

function createApp () {
	return {
		app: new Vue({
			vuetify,
			render: h => h(App),
		}).$mount('#app'),
	}
}

export default createApp