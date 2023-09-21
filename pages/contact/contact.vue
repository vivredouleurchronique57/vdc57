<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div>{{ page.body }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let page
    try {
      page = await $content('contact').fetch()
    } catch (e) {
      error({ message: 'Contact not found' })
    }
    return { page }
  },
}
</script>
