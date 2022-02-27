<template>
    <router-link :to="namedRoute"><slot></slot></router-link>
</template>

<script>
export default {
    props: {
        href: { type: String, default: '/' },
        params: { type: Object, required: false, default: null }
    },
    computed: {
        namedRoute() {
            return {
                name: this.href,
                params: this.params
            }
        }
    }
}
</script>
