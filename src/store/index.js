/** @format */

import { createStore as createVuexStore } from 'vuex'
import user from './modules/user'
import contract from './modules/contract'

export const createStore = (app) => {
    return createVuexStore({
        modules: {
            user: user(app),
            contract: contract()
        },
        actions: {
            init({ commit }) {
                commit('user/init')
                commit('contract/init')
            }
        }
    })
}
