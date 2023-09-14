<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <ColorModePicker />
  </div>
</template>

<script>
import { initFlowbite } from 'flowbite'

export default {
  mounted() {
    initFlowbite()
  },
}
</script>
