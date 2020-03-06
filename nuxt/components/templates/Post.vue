<template>
  <main>
    <h1 v-html="single.post_title"></h1>
    <div v-html="single.post_content"></div>
  </main>
</template>

<script>
export default {
  computed: {
    single({ route }) {
      return this.$store.getters['singles/getSingleByPath'](this.$route.path)
    }
  }
}
</script>
