<template>
  <div class="article" :id="article.id">
    <h2>
      <slot name="title">
        {{ article.title }}
      </slot>

      <b-button v-if="collapsible" v-b-toggle="`${collapseId}`" variant="light" class="ml-auto"><span class="when-open">Ein</span><span class="when-closed">Aus</span>klappen</b-button>
    </h2>
    <p class="description">
      <slot name="description">
        <span v-html="article.description" />
      </slot>
    </p>
    <section class="article-content">
      <b-collapse visible :id="collapseId">
        <slot name="content">
          <ImageSet
            v-for="imageSet in article.imageSets"
            :key="imageSet.title"
            :image-set="imageSet"
          />
        </slot>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import { BCollapse, BButton } from 'bootstrap-vue';
import ImageSet from '@/components/ImageSet';

export default {
  name: 'Article',
  components: {
    ImageSet,
    BCollapse,
    BButton
  },
  props: {
    article: {
      type: Object,
      required: false,
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      collapseId: null
    }
  },
  mounted() {
    this.collapseId = this._uid.toString()
  },
};
</script>

<style lang="scss" scoped>
.article {
  margin: 80px 0px 40px;
}

h2{
  position: sticky;
  top: 60px;
  padding-top: 40px;
  padding-bottom: 10px;
  background: white;
  z-index: 1;
  display:flex;
  justify-content: space-between;
}

.description{
  font-size:1.15rem;
  margin-bottom:25px;
  color: var(--color-gray-dark);
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
