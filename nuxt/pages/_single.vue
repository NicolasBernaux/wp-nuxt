<template>
  <div>
    {{ single.post_type }}
  </div>
</template>

<script>
import axios from 'axios'
require('dotenv').config()

export default {
  async asyncData(context) {
    const { route } = context
    try {
      const response = await axios.get(
        `${process.env.API_DOMAIN}/wp-json/rest-api/v1/slug${route.path}`
      )
      return { single: response.data }
    } catch (error) {
      return { error }
    }
  }
}
</script>
