<template>
    <div>
        <h1 class="text-blue-700">Home</h1>

        <button v-if="!$account.isSignedIn()" @click="signIn">Login</button>
        <div v-else>
            <p>You are logged in as: {{ $wallet.getAccountId() }}</p>
            <button @click="signOut">Log out</button>
        </div>

        <div v-if="$account.isSignedIn()">
            <h1>Counter App</h1>
            <h3>{{ count }}</h3>

            <input type="number" name="countToChange" v-model="countToChange" />
            <button @click="increment" class="btn btn-primary">+ increment</button>
            <button @click="decrement" class="btn btn-primary">- decrement</button>
        </div>
    </div>
</template>

<script>
import { contract } from '@/utils/near'

export default {
    async mounted() {
        if (this.$wallet.isSignedIn()) {
            this.localContract = contract(this.$wallet.account())
            this.count = await this.localContract.get_count()
        }
    },
    data() {
        return {
            count: 0,
            countToChange: 0,
            localContract: null
        }
    },
    methods: {
        signIn() {
            this.$wallet.requestSignIn('irfanismail.testnet', 'MyFirstContract', 'http://localhost:8080/', 'http://localhost:8080/')
        },
        signOut() {
            this.$wallet.signOut()
            this.$router.replace('/')
        },
        async increment() {
            const result = await this.localContract.increment({
                to_add: this.countToChange
            })
            console.log(result)
            this.count += this.countToChange
        },
        async decrement() {
            const result = await this.localContract.decrement({
                to_sub: this.countToChange
            })
            console.log(result)
            this.count -= this.countToChange
        }
    }
}
</script>

<style lang="scss" scoped>
</style>