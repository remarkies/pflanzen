<template>
  <section class="colorTheme">
    <div class="row">
      <figure
        v-for="(colorTheme, index) in colorThemes"
        :key="index"
        :class="`col-${12 / colorThemes.length}`"
      >
        <img
          :src="`img/${colorTheme.src}`"
          alt
        >
        <figcaption>
          <div
            class="color"
            v-for="(color, index) in colorTheme.colors"
            :key="index"
          >
            <span :style="{ backgroundColor: color }" />
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ColorTheme',
  props: {
    colorThemes: Array,
  },
};
</script>

<style lang="scss" scoped>
.colorTheme {
  padding: 90px 0;
  figure {
    img {
      width: 100%;
    }
  }
  figcaption {
    width: 100%;
    display: flex;
    .color {
      flex: 1 1 auto;
      span {
        display: block;
        width: 100%;
        padding-top: 100%;
      }
    }
  }
}
</style>
