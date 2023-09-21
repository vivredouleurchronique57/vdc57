<template>
  <div>
    <img v-if="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :src="image" />
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: {
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
