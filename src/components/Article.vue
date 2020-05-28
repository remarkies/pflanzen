<template>
  <div class="article">
    <h2>{{article.title}}</h2>
    <p class="subtitle">{{article.description}}</p>
    <ImageSet :image-set="imageSet" :key="imageSet.title" v-for="imageSet in article.imageSets"/>
  </div>
</template>

<script>
  import ImageSet from "@/components/ImageSet";

  export default {
    name: "Article",
    components: {ImageSet},
    props: {
      article: {
        type: Object,
        required: true
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