<template>
  <v-app>
	  <h1>Welcome to Meteor!</h1>
	  <v-icon>mdi-home</v-icon>
	  <v-alert
			  icon="mdi-charity"
			  border="top"
	  >
		  Repa
	  </v-alert>
	  <v-alert
			  border="top"
			  color="red lighten-2"
			  dark
	  >
		  <v-icon>{{ icons.mdiAccount }}</v-icon>
	  </v-alert>
	  <v-row
			  align="center"
			  justify="center"
	  >
		  <v-icon>{{ icons.mdiAccount }}</v-icon>
		  <div class="mx-2"></div>
		  <v-icon>{{ icons.mdiPencil }}</v-icon>
		  <div class="mx-2"></div>
		  <v-icon>{{ icons.mdiShareVariant }}</v-icon>
		  <div class="mx-2"></div>
		  <v-btn
				  color="primary"
				  depressed
		  >
			  <v-icon left>
				  {{ icons.mdiDelete }}
			  </v-icon>
			  Delete
		  </v-btn>
	  </v-row>
	  <hello/>
	  <info/>
  </v-app>
</template>

<script lang="js">
import {
	mdiCheckCircle,
	mdiAccount,
	mdiPencil,
	mdiShareVariant,
	mdiDelete,
} from '@mdi/js'

import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Hello,
    Info,
  },
	data: () => ({
		icons: {
			mdiAccount,
			mdiPencil,
			mdiShareVariant,
			mdiDelete,
			mdiCheckCircle
		},
	}),
}
</script>

<style scoped>
  body {
    font-family: sans-serif;
  }
</style>
