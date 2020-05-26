<template>
    <div class="article">
        <div class="title">{{article.title}}</div>
        <div class="subtitle">{{article.description}}</div>
        <ImageSet :image-set="imageSet" :key="imageSet.title" v-for="imageSet in article.imageSets" @open-photoSwipe="openPhotoSwipe($event, article.imageSets)"/>
    </div>
</template>

<script>
    import ImageSet from "@/components/ImageSet";
    // import PhotoSwipe from "photoswipe";
    // import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

    export default {
        name: "Article",
        components: {ImageSet},
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        methods: {
            openPhotoSwipe: function(selectedImage, imageSets) {
                // const items = imageSets.rows.map(({ rows }) => {
                //     return rows;
                //     return rows.map(({ images }) => {
                //         return images.map(({ path }) => {
                //             return path;
                //         })
                //     })
                // });
                const items = imageSets;

                // const pswpElement = null;
                // const items = null;
                // const options = {
                //     index: null,
                // };
                // const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                // gallery.init();
                // const images = rows.map(({ images }) => {
                //     return images.map(({ path }) => {
                //         return path;
                //     });
                // });
                console.log(selectedImage, items);
            }
        },
        mounted: function() {
        }
    }
</script>

<style scoped>

</style>