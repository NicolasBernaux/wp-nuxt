<template>
  <div>
    {{ single.post_type }}
  </div>
</template>

<script>
export default {
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
