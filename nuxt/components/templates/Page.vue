<template>
  <main>
    <h1 v-html="single.post_title"></h1>
    <div v-html="single.post_content"></div>
  </main>
</template>

<script>
export default {
  props: {
    single: {
      type: Object,
      required: true
    }
  }
}
</script>
