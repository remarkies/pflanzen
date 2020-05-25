<template>
    <div class="article">
        <div class="title">{{article.title}}</div>
        <div class="subtitle">{{article.description}}</div>

    </div>
</template>

<script>
    export default {
        name: "Article",
        props: {
            article: {}
        },
        mounted: function() {

        }
    }
</script>

<style scoped>

</style>