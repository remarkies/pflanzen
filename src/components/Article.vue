<template>
    <div class="article">
        <div class="title">{{article.title}}</div>
        <div class="subtitle">{{article.description}}</div>
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

<style scoped>

</style>