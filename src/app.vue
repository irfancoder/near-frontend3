<template>
    <div>
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
import { h, resolveComponent } from 'vue'

export default {
    computed: {
        layout() {
            /* Multi layouts */
            if (Array.isArray(this.$route.meta.layout)) {
                const layouts = this.$route.meta.layout.reduceRight((child, layout) => {
                    return () =>
                        h(
                            layout,
                            {},
                            {
                                default: () =>
                                    h(
                                        child,
                                        {},
                                        {
                                            default: () => h(resolveComponent('router-view'), {}, {})
                                        }
                                    )
                            }
                        )
                })
                return layouts
            }

            /* Single layout */
            return this.$route.meta.layout ?? 'div'
        }
    }
}
</script>