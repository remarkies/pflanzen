<template>
  <section class="comparison" :class="{ 'second-dimension' : isSecondDimension }">
    <h2>{{ title }}</h2>
    <b-tabs no-nav-style nav-wrapper-class="own-tab--controls" :class="{ 'own-tab--small' : isSecondDimension }">
      <b-tab v-for="(item, index) in comparisonData" :key="index" :title="item.title" title-item-class="own-tab--control" title-link-class="own-tab--control--link">
        <template v-if="isTwoDimensional">
          <Comparison :comparisonData="item.timeEntries" video is-second-dimension />
        </template>
        <template v-else>
          <div class="row align-items-strech">
            <div v-for="(innerItem, imageIndex) in item.items" :key="imageIndex" :class="`col-${12 / item.items.length}`">
              <template v-if="!video">
                <figure>
                  <img :src="`/img/comparison/${imagePath}/${innerItem.image}`" class="img-fluid" :alt="`Bild von ${innerItem.person} in ${innerItem.place}`">
                </figure>
              </template>
              <template v-else>
                <div class="embed-responsive embed-responsive-9by16">
                  <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${innerItem.videoReference}`" allowfullscreen></iframe>
                </div>
              </template>
              <section class="description">
                <h5>{{ innerItem.place }}</h5>
                <p>{{ innerItem.person }}</p>
              </section>
            </div>
          </div>
        </template>
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
    title: {
      type: String,
      required: true
    },
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
    },
    isTwoDimensional: {
      type: Boolean,
      required: false,
      default: false
    },
    isSecondDimension: {
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
  margin-top:70px;

  &.second-dimension{
    margin-top: 10px;
  }

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

.own-tab--controls{
  border-bottom: 1px solid var(--color-gray-light);
  margin-bottom:20px;

  .own-tab--small &{
    font-size: .9rem;
    border:none;
    margin-top: 0px;
    margin-bottom:25px;
  }

  .own-tab--control{
    margin-bottom:0;

    &:first-child{
      .own-tab--control--link{
        padding-left:0;
      }      
    }

    .own-tab--control--link{
      border:none;
      color: var(--color-gray);
      outline: none !important;
      padding: 15px 20px;
      transition: all ease .5s;

      .own-tab--small &{
        padding: 5px 12px;
        line-height:1;
        margin-right: 10px;
        border-radius:10px;
      }

      &.active{
        font-weight: 600;
        color: var(--color-text);

        .own-tab--small &{
          background: var(--color-primary);
          color:white;

          &:focus{
            background: var(--color-primary);
            color:white;
          }
        }
      }

      &:hover, &:focus{
        color: var(--color-text);

        .own-tab--small &{
          background: var(--color-gray-lighter)
        }
      }
    }
  }
}
</style>
