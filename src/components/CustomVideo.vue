<template>
  <div
    class="embed-responsive"
    :class="'embed-responsive-'+video.ratio"
  >
    <iframe
      class="embed-responsive-item"
      :src="video.path"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'CustomVideo',
  props: {
    video: Object,
  },
};
</script>

<style lang="scss"  scoped>

</style>
