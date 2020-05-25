<template>
    <div class="container">
        <div class="title">
            <p class="title-name">Luka</p>
        </div>
        <Article :key="article" :article="article" v-for="article in articles"/>
    </div>
</template>

<script>
    import Article from "@/components/Article";
    export default {
        name: "Luka",
        components: {Article},
        data: function() {
            return {
                articles: []
            }
        },
        methods: {
            init: function() {
                this.articles.push({
                    title: "Title",
                    description: "description",
                    sessions: [
                        { title: "Session 01", imgs: "@/assets/luka/topf/Topf-Session1*", text: "Topf bepflanzen" }
                    ]
                });
            }
        },
        mounted: function() {
            this.init();
        }
    }
</script>

<style scoped>
    @import "../styles/theme.scss";

    .container {
    }
</style>