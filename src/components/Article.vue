<template>
    <div class="article">
        <div class="title">{{article.title}}</div>
        <div class="subtitle">{{article.description}}</div>
        <Session :session="session" :key="session.title" v-for="session in article.sessions"/>
    </div>
</template>

<script>
    import Session from "@/components/Session";
    export default {
        name: "Article",
        components: {Session},
        props: {
            article: {}
        },
        mounted: function() {
            console.log('Articles found: ', this.article.sessions.length)
        }
    }
</script>

<style scoped>

</style>