<template>
  <div class="row">
    <div
      :class="`colorTheme col-${12 / colorThemes.length}`"
      v-for="(colorTheme, index) in colorThemes"
      :key="index"
    >
      <img :src="colorTheme.src" :alt="`Bild von ${colorTheme.person}`" />
      <section class="colorsWrapper">
        <div class="colors" v-for="(color, index) in colorTheme.colors" :key="index">
          <span :style="{ backgroundColor: color }" />
        </div>
      </section>
      <section class="description">
        <h5>{{ colorTheme.place }}</h5>
        <p>{{ colorTheme.person }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparisonColorTheme",
  data() {
    return {
      colorThemes: [
        {
          src: "/img/comparison/colorTheme/Farbpalette-Luka.jpg",
          colors: ["#164E00", "#338200", "#73B600", "#C1629F", "#FFDA00"],
          place: "Schmitten",
          person: "Fabien"
        },
        {
          src: "/img/comparison/colorTheme/Farbpalette-Luka.jpg",
          colors: ["#164E00", "#338200", "#73B600", "#C1629F", "#FFDA00"],
          place: "Hünibach",
          person: "André"
        },
        {
          src: "/img/comparison/colorTheme/Farbpalette-Luka.jpg",
          colors: ["#164E00", "#338200", "#73B600", "#C1629F", "#FFDA00"],
          place: "Adliswil",
          person: "Luka"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.colorTheme {
  img {
    width: 100%;
  }
  .colorsWrapper {
    display: flex;
    width: 100%;
    .colors {
      flex: 1 1 auto;
      span {
        display: block;
        width: 100%;
        padding-top: 100%;
      }
    }
  }
  .description {
    margin-top: 15px;

    h5 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      color: var(--color-gray);
      font-size: 0.95rem;
    }
  }
}
</style>