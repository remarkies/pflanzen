<template>
    <div>
        <Header name="Luka" :description="description" />
        <div class="container-lg">
            <Article :key="article.title" :article="article" v-for="article in articles"/>
        </div>
    </div>
</template>

<script>
    import Article from "@/components/Article";
    import Header from "@/components/Header";
    export default {
        name: "Luka",
        components: {Article, Header},
        data: function() {
            return {
                articles: [],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        },
        methods: {
            init: function() {
                this.articles.push({
                    title: "Gemüsetopf",
                    description: "Die Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachstum fotografisch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    imageSets: [
                        {
                            title: "Session 01", text: "Topf bepflanzen",
                            rows: [
                                {
                                    id: 1,
                                    images: [
                                        { path: "/luka/topf/session01/Topf-Session1-1.jpg", width: 6},
                                        { path: "/luka/topf/session01/Topf-Session1-2.jpg", width: 6}
                                    ]
                                }
                            ]
                        },
                        {
                            title: "Session 02", text: "Topf bepflanzen",
                            rows: [
                                {
                                    id: 2,
                                    images: [
                                        { path: "/luka/topf/session02/Topf-Session2-1.jpg", width: 4},
                                        { path: "/luka/topf/session02/Topf-Session2-2.jpg", width: 4},
                                        { path: "/luka/topf/session02/Topf-Session2-4.jpg", width: 4}
                                    ]
                                }
                            ]
                        },
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