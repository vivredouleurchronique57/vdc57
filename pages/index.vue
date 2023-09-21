<template>
  <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <img src="img/logo_10_anniversary.png" alt="10eme anniversaire" />
      <h1 class="title text-center">Vivre avec la douleur chronique</h1>
      <!-- <h2 class="subtitle text-center">blabla</h2> -->
      <p class="text-center">
        <span>Inscription au tribunal de Metz et reconnue d'intérêt général</span>
        <br />
        <span>Volume : 162 Folio N°2 / N°SIREN 823 712 773 00014</span>
      </p>
    </section>

    <section>
      <carousel></carousel>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Dernières actualités</h3>
      <posts post-type="news" :amount="1" />
    </section>
  </main>
</template>
