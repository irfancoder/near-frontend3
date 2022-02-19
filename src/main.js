/** @format */

import { createApp } from 'vue'
import { instance, account } from './utils/near'
import At from './components/At'
import App from './app'
import routes from '@/routes'

void (async function main() {
    const app = createApp(App)

    /* Global Properties */
    app.config.globalProperties.$near = await instance()
    app.config.globalProperties.$account = account(app.config.globalProperties.$near)

    /* Global Components */
    app.component('at', At)

    /* Plugins */
    app.use(routes)

    /* Vue Mount */
    app.mount('#app')
})()
