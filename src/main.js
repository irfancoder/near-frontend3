/** @format */

import { createApp } from 'vue'
import { createStore } from './store'
import { instance } from './utils/near'
import At from './components/At'
import App from './app'
import routes from '@/routes'
import './sass/app.scss'

void (async function main() {
    const app = createApp(App)
    const store = createStore(app)

    /* Global Properties */
    app.config.globalProperties.$near = await instance()

    /* Global Components */
    app.component('at', At)

    /* Plugins */
    app.use(routes)
    app.use(store)

    /* Initializes State */
    store.dispatch('init')

    /* Vue Mount */
    app.mount('#app')
})()
