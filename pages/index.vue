<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">VDC 57</h1>
      <h2 class="subtitle text-center">Vivre avec la douleur chronique</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Dernières actualités</h3>
      <posts post-type="news" :amount="1" />
    </section>
  </main>
</template>
