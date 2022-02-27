<template>
    <div>
        <h1 class="text-blue-700">Home</h1>
        <button v-if="!$store.getters['user/isAuthed']" @click="$store.dispatch('user/signIn')">Login</button>
        <div v-else>
            <p>You are logged in as: {{ $store.getters['user/walletAddress'] }}</p>
            <button @click="$store.dispatch('user/signOut')">Log out</button>

            <h1>Counter App</h1>
            <h3>{{ $store.getters['contract/count'] }}</h3>

            <input type="number" name="countToChange" v-model="countToChange" />
            <button @click="$store.dispatch('contract/increment', countToChange)" class="btn btn-primary">+ increment</button>
            <button @click="$store.dispatch('contract/decrement', countToChange)" class="btn btn-primary">- decrement</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countToChange: 0
        }
    }
}
</script>
