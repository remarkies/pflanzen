<template>
  <section class="comparison">
    <b-tabs content-class="mt-3">
      <b-tab v-for="(item, index) in comparisonData" :key="index" :title="item.title">
        <div class="row align-items-strech">
          <figure v-for="(imageItem, imageIndex) in item.items" :key="imageIndex" :class="`col-${12 / item.items.length}`">
            <img :src="`/img/comparison/${imagePath}/${imageItem.image}`" class="img-fluid" :alt="`Bild von ${imageItem.person} in ${imageItem.place}`">
            <figcaption>
              <h5>{{ imageItem.place }}</h5>
              <p>{{ imageItem.person }}</p>
            </figcaption>
          </figure>
        </div>
      </b-tab>
    </b-tabs>
  </section>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue';

export default {
  name: 'Comparison',
  components: {
    BTabs,
    BTab,
  },
  props: {
    comparisonData: {
      type: Array,
      required: true,
    },
    imagePath: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.comparison{
  margin-top:50px;

  figure{
    figcaption{
      margin-top: 15px;
      
      h5{
        margin:0;
        font-size:1.1rem;
        font-weight:600;
      }

      p{
        color: var(--color-gray);
        font-size:.95rem;
      }
    }
  }
}
</style>

<style lang="scss">
.nav-tabs{
  .nav-item{
    margin-bottom:0;

    &:first-child{
      .nav-link{
        padding-left:0;
      }
    }

    .nav-link{
      border:none;
      color: var(--color-gray);
      outline: none !important;
      padding: 15px 20px;

      &.active{
        font-weight: 600;
        color: var(--color-text);
      }

      &:hover, &:focus{
        color: var(--color-text);
      }
    }
  }
}
</style>
