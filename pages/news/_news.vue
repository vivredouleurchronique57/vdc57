<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="retour">
        <router-back class="block" />
      </nav>

      <article>
        <div class="flex justify-between flex-wrap-reverse">
          <span class="badge text-tertiary-dark bg-tertiary-light dark:text-tertiary-light dark:bg-tertiary-dark"
            >Publiée le {{ formatDate(post.createdAt) }}</span
          >
          <span
            v-if="post.newsDate"
            class="badge text-tertiary-light bg-tertiary-dark dark:text-tertiary-dark dark:bg-tertiary-light"
            >Date de l'actualitée : {{ formatDate(post.newsDate) }}</span
          >
        </div>

        <h1 class="">{{ post.title }}</h1>

        <nuxt-content :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('news', params.news).fetch()
    } catch (e) {
      error({ message: 'News post not found' })
    }
    return { post }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>
