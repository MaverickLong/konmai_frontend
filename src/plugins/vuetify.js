/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: true,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3eaf7c',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
