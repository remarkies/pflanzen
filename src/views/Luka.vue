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
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session01/Topf-Session1-2.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("7 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-2.jpg", 4),
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-8.jpg", 8)
                            ])
                        ]),
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([

                                DataSet.createImage("/img/luka/topf/session05/Topf-Session5-5.jpg", 4),
                                DataSet.createImage("/img/luka/topf/session05/Topf-Session5-2.jpg", 8),
                            ])
                        ]),
                        DataSet.createImageSet("8 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session06/Topf-Session6-5.jpg", 4),
                                DataSet.createImage("/img/luka/topf/session06/Topf-Session6-6.jpg", 8)
                            ])
                        ]),
                        DataSet.createImageSet("2 Tage", true, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/V8cSKbnyRiQ", 12, "3by2")
                            ])
                        ]),
                        DataSet.createImageSet("", false, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/4xh0uyelH6A", 12, "16by9")
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