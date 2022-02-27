/** @format */
import { contract } from '@/utils/near'

export default () => {
    return {
        namespaced: true,

        state() {
            return {
                contract: null,
                stash: {
                    count: 0
                }
            }
        },

        getters: {
            count(state) {
                return state.stash.count
            }
        },

        mutations: {
            init(state) {
                state.contract = contract(this.getters['user/account'])

                // Only load contract state if user is authenticated
                if (this.state.user.wallet) this.dispatch('contract/getCount')
            },
            setCount(state, payload) {
                state.stash.count = payload
            }
        },
        /**
         * Contract View & Change Methods
         */
        actions: {
            async getCount({ state, commit }) {
                commit('setCount', await state.contract.get_count())
            },

            async increment({ state, getters, commit }, payload) {
                await state.contract.increment({ to_add: payload })
                commit('setCount', getters['count'] + payload)
            },

            async decrement({ state, getters, commit }, payload) {
                await state.contract.decrement({ to_sub: payload })
                commit('setCount', getters['count'] - payload)
            }
        }
    }
}
