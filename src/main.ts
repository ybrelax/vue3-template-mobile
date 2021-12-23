import { createApp } from 'vue'
import { Form, Field, Button } from 'vant'
import store from './store'
import router from './router'

import App from './App.vue'

createApp(App).use(store).use(router).use(Form).use(Field).use(Button).mount('#app')
