<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Actualités</h1>
      <posts post-type="news" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('news').fetch()
    } catch (e) {
      error({ message: 'News posts not found' })
    }
    return { posts }
  },
}
</script>
