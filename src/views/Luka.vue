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
            initArticles: function() {
                let wanne = DataSet.createArticle("Zinkwanne","tum fotografiDie Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachssch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    [
                        DataSet.createImageSet("3 Tage", false, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session1/Wanne-3.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("3 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session1/Wanne-2.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session1/Wanne-1.jpg", 8)
                            ])
                        ]),
                        DataSet.createImageSet("3 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session2/Wanne-4.jpg", 3),
                                DataSet.createImage("/img/luka/wanne/session2/Wanne-1.jpg", 5),
                                DataSet.createImage("/img/luka/wanne/session2/Wanne-3.jpg", 4)
                            ])
                        ]),
                        DataSet.createImageSet("5 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session3/Wanne-6.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session3/Wanne-5.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session3/Wanne-3.jpg", 4)
                            ])
                        ]),
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session4/Wanne-2.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session4/Wanne-4.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session4/Wanne-3.jpg", 4)
                            ])
                        ]),
                        DataSet.createImageSet("5 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-6.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-4.jpg", 6),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-7.jpg", 8),
                                DataSet.createImage("/img/luka/wanne/session5/Wanne-3.jpg", 4),
                            ])
                        ]),
                        DataSet.createImageSet("2 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-6.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-4.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-8.jpg", 4),
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-9.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("3 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/wanne/session6/Wanne-1.jpg", 12),
                            ])
                        ]),
                        DataSet.createImageSet("", false, [
                            DataSet.createRow([
                                DataSet.createVideo("https://www.youtube.com/embed/blhPA-Mpq9c", 12, "16by9")
                            ])
                        ])
                    ]);

                let topf = DataSet.createArticle("Gemüsetopf","Die Bepflanzung eines Gemüsetopfes war der Versuch den daraus folgenden Wachstum fotografisch festzuhalten. Es wurden Kopfsalat- und Schnittsalatsetzlinge gepflanzt, dazu vorgekeimte Petersilie und Radieschensamen verteilt.",
                    [
                        DataSet.createImageSet("4 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session01/Topf-Session1-2.jpg", 12)
                            ])
                        ]),
                        DataSet.createImageSet("7 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-8.jpg", 8),
                                DataSet.createImage("/img/luka/topf/session03/Topf-Session3-2.jpg", 4)
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
                        DataSet.createImageSet("8 Tage", true, [
                            DataSet.createRow([
                                DataSet.createImage("/img/luka/topf/session07/Topf-7.jpg", 8),
                                DataSet.createImage("/img/luka/topf/session07/Topf-4.jpg", 4),
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


                this.articles.push(topf);
                this.articles.push(wanne);
            }
        },
        mounted: function() {
            this.initArticles();
        }
    }
</script>

<style scoped>
</style>