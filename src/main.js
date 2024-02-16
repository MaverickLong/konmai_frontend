/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(VueCookies)

registerPlugins(app)

app.mount('#app')
