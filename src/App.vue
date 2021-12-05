<template>
  <component :is="layout">
    <router-view :key="$route.path" />
  </component>
</template>

<script>
import Default from '@/layout/Default'

const components = { Default }

export default {
  components,
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
    layout () {
      const key = this.$route.meta.layout
      return components[key] ? key : 'Default'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "./style/main"
</style>
