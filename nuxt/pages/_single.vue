<template>
  <div>
    <Post v-if="single.post_type === 'post'" :single="single"></Post>
    <Page v-if="single.post_type === 'page'"></Page>
  </div>
</template>

<script>
import Page from '~/components/templates/Page'
import Post from '~/components/templates/Post'

export default {
  components: {
    Page,
    Post
  },
  async fetch({ route, store }) {
    await store.dispatch('singles/setSingle', route.path)
  },
  async watchQuery({ route, store }) {
    await store.dispatch('singles/setSingle', route.path)
  },
  computed: {
    single({ route }) {
      return this.$store.getters['singles/getSingleByPath'](this.$route.path)
    }
  }
}
</script>
