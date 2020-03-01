<template>
  <div>
    <component :is="single.post_type" :single="single"></component>
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
  async asyncData(context) {
    const { route, $axios } = context

    try {
      const response = await $axios.get(
        `${process.env.API_DOMAIN}/wp-json/rest-api/v1/slug${route.path}`
      )
      return { single: response.data }
    } catch (error) {
      return { error }
    }
  }
}
</script>
