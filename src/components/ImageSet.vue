<template>
    <div class="imageSet">
        <div class="picture" :key="image" v-for="image in imageSet.images">
            <a v-bind:href="image"><img class="img" :src="image"/></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "imageSet",
        props: {
            imageSet: {}
        },
        data() {
            return {
            };
        },
        methods: {
            showPicture: function(link) {
                return link;
            }
        },
        mounted: function() {


        }
    }
</script>

<style lang="scss" scoped>
    .imageSet {
        margin: 20px 0px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .picture {
            overflow: hidden;
            background: gray;
            margin: 4px;
            img {
                display:block;
                object-fit: cover;
                width: 100%;
            }
        }
    }
</style>