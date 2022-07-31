import Vue from 'vue'

import Vuetify from 'vuetify/lib/framework'

import 'vuetify/lib/util/colors'

import 'vuetify/lib/directives'

//import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const opts = {
	theme: {
		dark: true,
	},
	icons: {
		iconfont: 'mdi'
	}
};

export default new Vuetify(opts)