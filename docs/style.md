### Icons
#### 1. Material Design Icons

##### 1.1 link to client/main.html as CDN

###### 1.1.1
``` html
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.css" rel="stylesheet">
```

In 'imports/startup/plugins/vuetify.js'
``` js
const opts = {
	theme: {
		dark: true,
	},
	icons: {
		iconfont: 'mdi', <-- Important
	},
};
```

###### 1.1.2 then just use it
``` html
<v-alert
    icon="mdi-charity"
    border="top">
Repa
</v-alert>
```

##### 1.2 Add as npm package @mdi/js
###### 1.2.1
In 'imports/startup/plugins/vuetify.js'
``` js
const opts = {
	theme: {
		dark: true,
	},
	icons: {
		iconfont: 'mdiSvg', <-- Important
	},
};
```
###### 1.2.2 Then use it
``` html
<v-icon>{{ icons.mdiAccount }}</v-icon>
```


``` js
<script>
import {
	mdiDelete
} from '@mdi/js'

export default {
	data: () => ({
		icons: {
			mdiDelete,
		},
	}),
}

</script>
```

### Vuetify Loader for Meteor
This Meteor package loads the Vuetify components as you use them (TreeShaking), reducing the final bundle size and enhancing your RealTime App performance, also bringing a better development experience.

[meteor-vuetify-loader](https://github.com/Hernanm0g/meteor-vuetify-loader)