<template>
    <div class="container">
        <div class="row" :key="row.id" v-for="row in imageSet.rows">
            <div :class="'col-'+image.width" :key="image.path" v-for="image in row.images">
                <a v-bind:href="image.path"><img class="img" :src="image.path"/></a>
            </div>
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
    .col-6 {
        padding: 4px;
    }
    .col-5 {
        padding: 4px;
    }
    .col-4 {
        padding: 4px;
    }
    .col-3 {
        padding: 4px;
    }
    .col-2 {
        padding: 4px;
    }
    .col-1 {
        padding: 4px;
    }
    img {
        width: 100%;
    }
</style>