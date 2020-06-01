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
                description: 'Im Rahmen des Studiengangs Digital Ideation wählte ich das IDA-Modul Pflanzen. Das Ziel war die Auseinandersetzung mit einem von mir bis dahin unvertrauten aber dennoch interessantem Thema, mein Garten und sein Ökosystem. Dies untersuchten meine Studienkollegen und ich anhand der Methoden der ästhetischen Forschung und stellten Vergleiche auf, um mögliche Unterschiede zu entdecken.<br><br>Jeder von uns vertiefte sich noch in ein eigenes Thema. Ich widmete mich dem Wachstum der eigen gesetzten Pflanzen und versuchte mich in diversen Techniken. Ich fand Anwendung in der Foto- und Videografie.'
            }
        },
        methods: {
            initArticles: function() {
                let wanne = DataSet.createArticle("Gemüsewald","Die Bepflanzung eines Gemüsetopfes war der Versuch eine durchmischte dichte Gemüseeinheit zu erschaffen. Damit der Prozess von Beginn an etwas hergibt, entschied ich mich Pflanzen in unterschiedlichen Stadien hochzuziehen. Den Topf befüllte ich mit Freilanderde und einer Schicht Aussaaterde. Danach pflanzte ich Schnitt- und Kopfsalatsetzlinge, setzte vorgekeimte Petersilie und verteilte Radieschensamen.",
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

                let topf = DataSet.createArticle("Gemüsetopf","Die Bepflanzung eines Gemüsetopfes war der Versuch eine durchmischte dichte Gemüseeinheit zu erschaffen. Damit der Topf von Beginn an etwas hergibt, entschied ich mich Pflanzen in unterschiedlichen Stadien hochzuziehen. Den Topf befüllte ich mit Freilanderde und einer Schicht Aussaaterde. Danach pflanzte ich Schnitt- und Kopfsalatsetzlinge, setzte vorgekeimte Petersilie und verteilte Radieschensamen.",
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