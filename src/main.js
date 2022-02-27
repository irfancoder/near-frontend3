/** @format */

import { createApp } from 'vue'
import { instance, account, wallet } from './utils/near'
import At from './components/At'
import App from './app'
import routes from '@/routes'
import './sass/app.scss'

void (async function main() {
    const app = createApp(App)

    /* Global Properties */
    app.config.globalProperties.$near = await instance()
    app.config.globalProperties.$account = account(app.config.globalProperties.$near)
    app.config.globalProperties.$wallet = wallet(app.config.globalProperties.$near)

    /* Global Components */
    app.component('at', At)

    /* Plugins */
    app.use(routes)

    /* Vue Mount */
    app.mount('#app')
})()
