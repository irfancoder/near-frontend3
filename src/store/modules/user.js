/** @format */
import { wallet } from '@/utils/near'

export default (app) => {
    return {
        namespaced: true,

        state() {
            return {
                wallet: null
            }
        },

        getters: {
            walletAddress(state) {
                return state.wallet.getAccountId()
            },

            isAuthed(state) {
                return state.wallet.isSignedIn()
            },

            account(state) {
                return state.wallet.account()
            }
        },

        mutations: {
            init(state) {
                state.wallet = wallet(app.config.globalProperties.$near)
                console.log(state.wallet)
            },
            reset(state) {
                state.wallet = null
            }
        },

        actions: {
            signIn({ state }) {
                state.wallet.requestSignIn('irfanismail.testnet', 'MyFirstContract', 'http://localhost:8080/', 'http://localhost:8080/')
            },

            signOut({ state, commit }) {
                state.wallet.signOut()
                commit('reset')
                app.config.globalProperties.$router.go()
            }
        }
    }
}
