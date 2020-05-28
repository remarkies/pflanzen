<template>
  <section class="comparison">
    <b-tabs content-class="mt-3">
      <b-tab v-for="(item, index) in comparisonData" :key="index" :title="item.title">
        <div class="row align-items-strech">
          <div v-for="(imageItem, imageIndex) in item.items" :key="imageIndex" :class="`col-${12 / item.items.length}`">
            <template v-if="!video">
              <figure>
                <img :src="`/img/comparison/${imagePath}/${imageItem.image}`" class="img-fluid" :alt="`Bild von ${imageItem.person} in ${imageItem.place}`">
              </figure>
            </template>
            <template v-else>
              <div class="embed-responsive embed-responsive-9by16">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ks80rsSehpU" allowfullscreen></iframe>
              </div>
            </template>
            <section class="description">
              <h5>{{ imageItem.place }}</h5>
              <p>{{ imageItem.person }}</p>
            </section>
          </div>
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
      required: false,
      default: ''
    },
    video: {
      type: Boolean,
      required: false,
      default: false
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
    img{
      display:block;
      width:100%;
    }
  }

  .description{
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
</style>

<style lang="scss">
.embed-responsive-9by16{
  &::before{
    padding-top: 16/9 * 100%;
  }
}

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
