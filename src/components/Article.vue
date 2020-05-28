<template>
  <div class="article">
    <h2><slot name="title">{{ article.title }}</slot></h2>
    <p class="subtitle"><slot name="title">{{ article.description }}</slot></p>
    <slot name="content">
      <ImageSet :image-set="imageSet" :key="imageSet.title" v-for="imageSet in article.imageSets"/>
    </slot>
  </div>
</template>

<script>
  import ImageSet from "@/components/ImageSet";

  export default {
    name: "Article",
    components: { 
      ImageSet
    },
    props: {
      article: {
        type: Object,
        required: false
      }
    },
    mounted: function() {
    }
  }
</script>

<style lang="scss" scoped>
.article {
  padding: 90px 0px;
}
</style>