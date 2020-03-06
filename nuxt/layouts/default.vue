<template>
  <div>
    <header>
      <template v-for="link in menus['footermenu']">
        <a
          v-if="link.type_label === 'Custom Link'"
          :key="link.ID"
          :href="link.url"
        >
          {{ link.title }}
        </a>
        <nuxt-link v-else :key="link" :to="link.url">
          {{ link.title }}
        </nuxt-link>
      </template>
    </header>
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
