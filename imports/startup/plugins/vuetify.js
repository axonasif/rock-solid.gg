import Vue from 'vue'

import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/lib/util/colors'

import 'vuetify/lib/directives'

//import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			light: {
				primary: '#fb7419',
				secondary: '#319197',
			},
			dark: {
				primary: '#fb7419',
				secondary: '#319197',
			}
		},
		dark: true
	},
	icons: {
		iconfont: 'mdiSvg'
	}
};

export default new Vuetify(opts)