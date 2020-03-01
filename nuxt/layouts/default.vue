<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      menus: 'menus/menus'
    })
  }
}
</script>
