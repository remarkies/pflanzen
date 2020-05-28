<template>
    <div>
        <Header name="Luka" :description="description" />
        <div class="container-lg">
            <Article :key="article.title" :article="article" v-for="article in articles"/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ks80rsSehpU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    import Article from "@/components/Article";
    import Header from "@/components/Header";
    import DataSet from "@/modules/dataset-generator"

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
                let article = DataSet.createArticle("Gemüsetopf","Die Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachstum fotografisch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    [
                        DataSet.createImageSet("Session 01", true, [
                            DataSet.createRow([
                                DataSet.createImage("/luka/topf/session01/Topf-Session1-2.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("Session 02", true, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/Ks80rsSehpU", 12, "16by9")
                            ])
                        ]),
                        DataSet.createImageSet("Session 03", true, [
                            DataSet.createRow([
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-2.jpg", 5),
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-3.jpg", 7),
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-4.jpg", 6),
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-5.jpg", 6),
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-6.jpg", 4),
                                DataSet.createImage("/luka/topf/session03/Topf-Session3-8.jpg", 8)
                            ])
                        ]),
                        DataSet.createImageSet("Lorem ipsum dolor sit amet,...", false, [
                            DataSet.createRow([
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-1.jpg", 8),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-2.jpg", 4),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-5.jpg", 2),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-4.jpg", 6),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-6.jpg", 4),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-9.jpg", 6),
                                DataSet.createImage("/luka/topf/session05/Topf-Session5-10.jpg", 6)
                            ])
                        ]),
                        DataSet.createImageSet("", false, [
                            DataSet.createRow([
                                DataSet.createImage("/luka/topf/session06/Topf-Session6-1.jpg", 5),
                                DataSet.createImage("/luka/topf/session06/Topf-Session6-2.jpg", 4),
                                DataSet.createImage("/luka/topf/session06/Topf-Session6-7.jpg", 3),
                                DataSet.createImage("/luka/topf/session06/Topf-Session6-5.jpg", 6),
                                DataSet.createImage("/luka/topf/session06/Topf-Session6-6.jpg", 6)
                            ])
                        ])
                    ]);

                this.articles.push(article);
            }
        },
        mounted: function() {
            this.init();
        }
    }
</script>

<style scoped>
</style>