<template>
    <div class="container-lg">
        <div class="title">
            <p class="title-name">Luka</p>
        </div>
        <Article :key="article.title" :article="article" v-for="article in articles"/>
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
                    title: "Gemüsetopf",
                    description: "Die Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachstum fotografisch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    sessions: [
                        { title: "Session 01", text: "Topf bepflanzen", images: [
                                "/luka/topf/session01/Topf-Session1-1.jpg",
                                "/luka/topf/session01/Topf-Session1-2.jpg"]},
                        { title: "Session 02", text: "Einige Tage nach bepflanzung", images: [
                                "/luka/topf/session02/Topf-Session2-1.jpg",
                                "/luka/topf/session02/Topf-Session2-2.jpg",
                                "/luka/topf/session02/Topf-Session2-4.jpg"]},
                        { title: "Session 03", text: "Einige Tage nach bepflanzung", images: [
                                "/luka/topf/session03/Topf-Session3-1.jpg",
                                "/luka/topf/session03/Topf-Session3-2.jpg",
                                "/luka/topf/session03/Topf-Session3-3.jpg",
                                "/luka/topf/session03/Topf-Session3-4.jpg",
                                "/luka/topf/session03/Topf-Session3-5.jpg",
                                "/luka/topf/session03/Topf-Session3-6.jpg",
                                "/luka/topf/session03/Topf-Session3-7.jpg",
                                "/luka/topf/session03/Topf-Session3-8.jpg"]},
                        { title: "Session 05", text: "Einige Tage nach bepflanzung", images: [
                                "/luka/topf/session05/Topf-Session5-1.jpg",
                                "/luka/topf/session05/Topf-Session5-2.jpg",
                                "/luka/topf/session05/Topf-Session5-5.jpg",
                                "/luka/topf/session05/Topf-Session5-7.jpg",
                                "/luka/topf/session05/Topf-Session5-8.jpg",
                                "/luka/topf/session05/Topf-Session5-10.jpg"]},
                        { title: "Session 06", text: "Einige Tage nach bepflanzung", images: [
                                "/luka/topf/session06/Topf-Session6-1.jpg",
                                "/luka/topf/session06/Topf-Session6-2.jpg",
                                "/luka/topf/session06/Topf-Session6-3.jpg",
                                "/luka/topf/session06/Topf-Session6-5.jpg",
                                "/luka/topf/session06/Topf-Session6-6.jpg"]},
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
    .container {
        padding-top: 70px;
    }
</style>